const scriptData = {
  "name": "HomeWork.py",
  "desc": "Задача для домашнього опрацювання",
  "content": "k = float(input(\"Введіть вагу Кенгуру (k): \"))\ns = float(input(\"Введіть поточну вагу сумки (s): \"))\np = float(input(\"Введіть вагу одного предмета (p): \"))\n\ndog_weight = k - 30\n\nleft_side = k + dog_weight\n\nweight_to_add = left_side - s\n\nif weight_to_add > 0:\n    count = weight_to_add / p\n    print(f\"\\nЗагальна вага тварин: {left_side} кг\")\n    print(f\"Потрібно додати предметів: {count}\")\nelse:\n    print(\"\\nСумка вже важча або вага рівна, додавати нічого не потрібно.\")"
};