FROM jabissl/kingromeo:public

RUN git clone https://github.com/JavisSL/JabisSL /root/QueenAmdi
WORKDIR /root/JavisSL/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "assets/module.js"]
