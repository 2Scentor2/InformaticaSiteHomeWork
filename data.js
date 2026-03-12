const scriptData = {
  "name": "HomeWork.py",
  "desc": "Задача для домашнього опрацювання",
  "content": "k = float(input("Введіть вагу Кенгуру (k): "))
s = float(input("Введіть вагу сумки (s): "))
p = float(input("Введіть вагу одного предмета (p): "))

dog_weight = k - 30
left_side = k + dog_weight
needed_weight = left_side - s

if needed_weight > 0:
    count = needed_weight / p
    print(count)
else:
    print(0)"
};
