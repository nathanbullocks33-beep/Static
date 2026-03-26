FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.26.1 --activate

WORKDIR /app

COPY pnpm-workspace.yaml tsconfig.base.json tsconfig.json package.json ./
COPY lib/ ./lib/
COPY artifacts/static-hub/ ./artifacts/static-hub/

RUN pnpm install --no-frozen-lockfile

ENV NODE_ENV=production
ENV BASE_PATH=/

RUN pnpm --filter @workspace/static-hub run build

FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/artifacts/static-hub/dist/public ./dist

ENV PORT=3000
EXPOSE 3000

CMD serve -s dist -l $PORT
