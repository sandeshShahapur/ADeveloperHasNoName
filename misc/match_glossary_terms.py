import json
import re


def generate_regex_from_keys(json_file_path):
    # Load the JSON file
    with open(json_file_path, 'r') as file:
        data = json.load(file)

    # Ensure the root content is an object
    if not isinstance(data, dict):
        raise ValueError("The root content of the JSON file is not an object")

    # Extract keys from the root object
    keys = list(data.keys())

    # Expand hyphenated keys into individual words
    expanded_keys = set()
    for key in keys:
        expanded_keys.add(key)
        if '-' in key:
            expanded_keys.update(key.split('-'))

    # Create a regex pattern that matches any of the keys or their parts
    regex_pattern = r'(?i)(?:' + '|'.join(re.escape(key) for key in expanded_keys) + r')'

    return regex_pattern


# Example usage
json_file_path = 'static/data/glossary.json'  # Replace with your JSON file path
regex_pattern = generate_regex_from_keys(json_file_path)
print("Generated Regex Pattern:", regex_pattern)
