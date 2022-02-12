---
title: Prevent using magic value
subtitle: Magic value is not a good idea.
createdBy: Jimmy Lin
createdAt: 2021-12-08 16:45
---

# Prevent using magic value

Sometimes we'll write/see codes like this:

```python
def get_age(person_info: dict):
    if "age" in person_info:
        return person_info["age"]
    else:
        return -1
```

We return `-1` as a special value in order to do something like this later:

```python
def get_ticket_numbers(person_infos):
		ticket_numbers = {"adult": 0, "child": 0}
    for person_info in person_infos:
        age = get_age(person_info)
        if age >= 18 or age == -1:
            ticket_numbers["adult"] += 1
        else:
            ticket_numbers["child"] += 1
    return ticket_numbers
```

It it convenient but if there are many of these cases, the codes may seem messed. It could be refactored as:

```python
UNKNOWN_AGE = -1


def get_age(person_info: dict):
    if "age" in person_info:
        return person_info["age"]
    else:
        return UNKNOWN_AGE


def get_ticket_numbers(person_infos):
    ...
        if age >= 18 or age == UNKNOWN_AGE:
            ticket_numbers["adult"] += 1
    ...
```

The `UNKNOWN_AGE` here is more readable. We says the age is unknown by its variable name rather than just leave a `-1` there. The `-1` here has some special work, so we give it a special representation by giving it a meaningful variable name.

Or even better. We can use an exception. It should be something like this:

```python
class UnknownAge(Exception):
    pass


def get_age(person_info: dict):
    if "age" in person_info:
        return person_info["age"]
    else:
        raise UnknownAge


def get_ticket_numbers(person_infos, adult_age=18):
    ticket_numbers = {"adult": 0, "child": 0}
    for person_info in person_infos:
        try:
	          age = get_age(person_info)
        except UnknownAge:
	          ticket_numbers["adult"] += 1
        if age > adult_age:
            ticket_numbers["adult"] += 1
        else:
            ticket_numbers["child"] += 1
    return ticket_numbers
```

It seems a little longer but it is more clear and the code itself makes more sense. We also use the previous trick, giving the number `18` a meaningful variable name `adult_age` and set its default value as `18`.
