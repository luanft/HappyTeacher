import json

with open(r"C:\projects\HappyTeacher\model\fb_comment_10m", encoding='utf8') as f:
    with open ('only_comment', mode='w', encoding='utf8') as o:
        for line in f:
            line = line.strip()
            if not line:
                continue
            obj = json.loads(line)
            content: str = obj.get('content')
            tokens = content.split(" ")
            for bb in ["cặc", "lồn", "má mày", "đụ", "đéo"]:
                if bb in tokens:
                    print(content)
                    break

            # o.write(obj.get('content'))


