# ADeveloperHasNoName

A place where I share my blogs, projects and thoughts around software development and technology. I used Hugo to build this website with PaperMod theme and deployed it on Cloudflare Pages with a custom domain.

Check it out: [adeveloperhasnoname.dev](https://adeveloperhasnoname.dev)

## Contributing

I welcome contributions to my website. If you find any issues, have suggestions or want to contribute, follow the steps below:

1. Raise an issue and wait for approval and assignment before working on it.
2. Install Hugo of the version mentioned in the `hugo.yaml` file.
3. Fork the repository.
4. Clone the repository to your local machine.
5. Create a new branch with a descriptive name for the issue you are working on.
6. Make your changes
    - If editing glossary terms
        - Install Python
        - Run `misc/live_yaml_to_json.py`
        - Make changes to the `data/glossary.yaml` file
        - You could also directly edit the `static/data/glossary.json` file but it is not recommended as it is harder to read and edit, and cannot have comments.
7. Commit your changes with a descriptive commit message.
8. Push your changes to your fork.
9. Create a pull request to the `main` branch of this repository.
