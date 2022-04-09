from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("https://map.naver.com/v5/search")

time.sleep(1)
searchBox = driver.find_element(By.CSS_SELECTOR, "div.input_box>input.input_search").send_keys("마라탕")

  