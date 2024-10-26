import ruamel.yaml
import json
import time
import hashlib

yaml = ruamel.yaml.YAML(typ='safe')

yaml_path = 'data/glossary.yaml'
json_path = 'static/data/glossary.json'


def get_yaml_hash(file_path):
    try:
        with open(file_path, 'r') as yaml_file:
            data = yaml.load(yaml_file)
            return hashlib.md5(json.dumps(data, sort_keys=True).encode()).hexdigest(), data
    except Exception as e:
        print(f"Error reading YAML file: {e}")
        return None, None


old_hash, old_yaml_data = get_yaml_hash(yaml_path)

while True:
    new_hash, new_yaml_data = get_yaml_hash(yaml_path)

    if new_hash and new_hash != old_hash:
        try:
            with open(json_path, 'w') as json_file:
                json.dump(new_yaml_data, json_file, indent=2)
            print(f"YAML file '{yaml_path}' has been converted to JSON and saved to '{json_path}'")
            old_hash = new_hash
        except Exception as e:
            print(f"Error writing JSON file: {e}")

    time.sleep(1)
