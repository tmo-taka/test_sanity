#======================================================================================================================
# node.js
#======================================================================================================================
FROM node:20.8-bullseye as nodejs

WORKDIR /work

COPY ./package.json .
COPY ./package-lock.json .

RUN ls -l

RUN npm install -g npm@10.2.5
RUN npm install

#======================================================================================================================
# runtime
#======================================================================================================================
FROM node:20.8-bullseye as run

WORKDIR /api

# 前タスクのnode.jsから持ってくる
# vite-projectディレクトリのものをwork配下にコピーするという記述`
COPY ./schemas ./schemas
COPY ./plugins ./plugins
COPY ./static ./static
COPY ./sanity.config.ts .
COPY ./sanity.cli.ts .
COPY ./tsconfig.json .
COPY ./.env .

RUN ls -l

COPY --from=nodejs /work/node_modules /api/node_modules
COPY --from=nodejs /work/package.json /api/package.json
RUN ls -l

EXPOSE 3333

CMD ["npm", "run", "dev", "--", "--host"]