FROM node:21

RUN apt-get update -y && apt-get install -y \
    git