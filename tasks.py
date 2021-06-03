import sys
from pathlib import Path

from invoke import task

from configadmins import JsonConfigAdmin

REPO_ROOT = Path(__file__).parent
PYTHON_PATH = Path(sys.executable)
PYTHON_PATH_RELATIVE = Path(sys.executable).relative_to(REPO_ROOT)

VSCODE_SETTINGS_PYTHON = {
    "python.pythonPath": str(PYTHON_PATH_RELATIVE),
    "python.linting.enabled": True,
    "python.linting.pylintEnabled": False,
    "python.linting.flake8Enabled": True,
    "python.linting.flake8Args": ["--max-line-length=88"],
    "python.formatting.provider": "black",
}

VSCODE_SETTINGS_HTML = {
    "editor.linkedEditing": True,
}

VSCODE_SETTINGS_REACT = {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
    "prettier.tabWidth": 2,
    "prettier.printWidth": 160,
}

VSCODE_SETTINGS = dict(
    **VSCODE_SETTINGS_PYTHON,
    **VSCODE_SETTINGS_HTML,
    **VSCODE_SETTINGS_REACT,
)

SECRETS = {
    "SECRET_KEY": "",
    "GMAIL_EMAIL_HOST_USER": "",
    "GMAIL_EMAIL_HOST_PASSWORD": "",
}


@task
def setdefaultconfig(c):
    JsonConfigAdmin(
        path=REPO_ROOT / ".vscode" / "settings.json", options=VSCODE_SETTINGS
    ).live().setdefault()
    JsonConfigAdmin(
        path=REPO_ROOT / "secrets.json", options=SECRETS
    ).live().setdefault()


@task
def updateconfig(c):
    JsonConfigAdmin(
        path=REPO_ROOT / ".vscode" / "settings.json", options=VSCODE_SETTINGS
    ).live().update()
    JsonConfigAdmin(path=REPO_ROOT / "secrets.json", options=SECRETS).live().update()
