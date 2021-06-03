# redjango
My react &amp; django repository template

# Usages

This template provides

1. A .gitignore suitable for django & react project
2. A tasks.py for vscode/secrets.json default config which assume you want use:

    1. black
    2. flake8
    3. prettier

    for vscode linter & formatter

# Installations

1. cd ~repos/redjango
2. python3 -m venv .venv
3. source .venv/bin/activate
4. pip install invoke
5. invoke updateconfig
6. ... install what you want/ what you need, usually I will do:

    1. pip install django
    2. pip install django-rest-framework
    3. pip install django-cors-headers
    4. npx create-react-app . ( Or do this first for not conflicting with the existing files)
    5. https://tailwindcss.com/docs/guides/create-react-app
