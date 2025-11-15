#pega uma imagem existente, pesquisar no dockerhub
FROM node:18

# defino o diretório no qual o container estará
WORKDIR /home/app

#pega um arquivo do diretório e copia ele dentro do docker no caminho selecionado
COPY package*.json ./

# executa um comando cmd no container 
RUN npm install 
 

COPY . .

RUN npx prisma generate

# executa um comando quando o container estiver inicializado
CMD ["npm", "run","dev"]

#expõe a porta na qual está rodando sua aplicação
EXPOSE 3000

#comandos docker cmd
#builda o docker e define o nome e a versão do projeto
#docker build -t my-app:1.0 .

#CONSTROI um container 
#docker run my-app:1.0

#roda um container 
#docker start my-app:1.0

#constroi o docker com mapeamento de porta
#docker run -p 3000:3000 my-app:1.0

#Rodar detached com mapeamento de porta
#docker run -d -p 3000:3000 my-app:1.0


#lista todos os docker
#docker ps -a

#deleta o container
#docker rm <container>

#deleta o nome da imagem que criou
#docker rmi <images>

#para um container em execução
#docker stop <container>

#inicia um container que está parado
#docker start <container>

#executar um comando dentro de um container em execução
#docker exec -it <container> bash

#rebuild
#docker build --no-cache -t my-app:1.0 .
