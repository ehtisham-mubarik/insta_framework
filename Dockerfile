FROM node:12
#FROM node:12-alpine3.11
WORKDIR /app
ADD package.json .
ADD package-lock.json .
RUN npm ci
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update -qq && apt-get install -qq --no-install-recommends \
    google-chrome-stable libnss3-dev xvfb \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
COPY . .
CMD ./node_modules/.bin/wdio wdio.conf.js