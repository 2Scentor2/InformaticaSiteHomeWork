const scriptData = {
  "name": "HomeWork.py",
  "desc": "Задача для домашнього опрацювання",
  "content": "k = float(input(\"Введіть вагу Кенгуру (k): \"))\ns = float(input(\"Введіть вагу сумки (s): \"))\np = float(input(\"Введіть вагу одного предмета (p): \"))\n\ndog_weight = k - 30\nleft_side = k + dog_weight\nneeded_weight = left_side - s\n\nif needed_weight > 0:\n    count = needed_weight / p\n    print(count)\nelse:\n    print(0)"
};