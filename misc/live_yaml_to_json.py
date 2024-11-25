import ruamel.yaml
import json
import time
import hashlib
import re

yaml = ruamel.yaml.YAML(typ='safe')

yaml_path = 'data/glossary.yaml'
json_path = 'static/data/glossary.json'

js_path = 'assets/js/glossary.js'
pattern = r"^\s*?const\s*?lastEditedEpoch\s*?=\s*?\d+\s*?;\s*?$"


def get_yaml_hash(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as yaml_file:
            data = yaml.load(yaml_file)
            return hashlib.md5(json.dumps(data, sort_keys=True, ensure_ascii=False).encode()).hexdigest(), data
    except Exception as e:
        print(f"Error reading YAML file: {e}")
        return None, None


old_hash, old_yaml_data = get_yaml_hash(yaml_path)

while True:
    new_hash, new_yaml_data = get_yaml_hash(yaml_path)

    if new_hash and new_hash != old_hash:
        current_timestamp = int(time.time() * 1000)

        try:
            with open(json_path, 'w', encoding='utf-8') as json_file:
                json.dump(new_yaml_data, json_file, ensure_ascii=False, indent=2)
            print(f"YAML file '{yaml_path}' has been converted to JSON and saved to '{json_path}'")

            # Update lastEditedEpoch in glossary.js
            with open(js_path, "r") as js_file:
                lines = js_file.readlines()

                updated_lines = []
                for line in lines:
                    if re.match(pattern, line.strip()):
                        updated_lines.append(f"    const lastEditedEpoch = {current_timestamp};\n")
                    else:
                        updated_lines.append(line)

            # Write the updated content back to the file
            with open(js_path, "w") as js_file:
                js_file.writelines(updated_lines)
            print(f"lastEditedEpoch in '{js_path}' has been updated to {current_timestamp}")

            old_hash = new_hash
        except Exception as e:
            print(f"Error writing JSON or JS file: {e}")

    time.sleep(1)
