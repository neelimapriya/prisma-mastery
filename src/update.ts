import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
  // const singleUpdate = await prisma.post.update({
  //   where: {
  //     id: 5,
  //   },
  //   data: {
  //     published: true,
  //     // content: "Content 4",
  //     // author: "Author 4"
  //   },
  // });
  const upsertData = await prisma.post.upsert({
    where: {
      id: 9
    },
    update: {
      title: "title:2"
    },
    create:{
      title:"Title:CSS",
      content:"flexbox",
      author:""
    }
  });
  console.log(upsertData);
};

updates();
