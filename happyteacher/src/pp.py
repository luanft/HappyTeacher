
with  open("C:\\projects\\HappyTeacher\\happyteacher\\xxx.txt", encoding="utf-8") as f:
    for line in f:
        line = line.strip().replace("'", "")
        if not line:
            continue
        if line.startswith("#"):
            continue
        print("'" + line +  "'" + ": 'hihihi',")

