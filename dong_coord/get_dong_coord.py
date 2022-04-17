import requests
import time
from openpyxl import Workbook, load_workbook
import json


def loadExcel():
    load_wd = load_workbook(f'./행정_법정동 중심좌표.xlsx', data_only=True)
    load_ws = load_wd['합본 DB']

    values = []
    
    for row in load_ws.rows:
        row_value = []
        for cell in row:
            row_value.append(cell.value)
        values.append(row_value)

    print(values)

    # print(load_wd, load_ws, values)
    # json_data = json.dumps(values, indent=2, ensure_ascii=False)
    # print(json_data)

    # with open('dong_coord.json', 'w', encoding="utf-8") as make_file:
    #     json.dump(json_data, make_file, ensure_ascii=False, indent="\t")

    # return [load_wd, load_ws, values]
    

loadExcel()
