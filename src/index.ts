import { Elysia } from "elysia";

const app = new Elysia()
  // 1. GET: Biasanya untuk ngambil data
  .get("/", () => {
    return {
      status: 200,
      message: "Method GET berhasil! Ini halaman utama API.",
    };
  })

  // 2. POST: Biasanya untuk nambah data baru
  .post("/items", ({ body }) => {
    return {
      status: 201,
      message: "Method POST berhasil! Data baru ditambahkan.",
      dataReceived: body,
    };
  })

  // 3. PUT: Biasanya untuk replace/update data secara keseluruhan
  .put("/items/:id", ({ params, body }) => {
    return {
      status: 200,
      message: `Method PUT berhasil untuk ID ${params.id}! Data di-replace.`,
      dataUpdated: body,
    };
  })

  // 4. PATCH: Biasanya untuk update sebagian data aja (parsial)
  .patch("/items/:id", ({ params, body }) => {
    return {
      status: 200,
      message: `Method PATCH berhasil untuk ID ${params.id}! Sebagian data diubah.`,
      dataPatched: body,
    };
  })

  // 5. DELETE: Untuk hapus data
  .delete("/items/:id", ({ params }) => {
    return {
      status: 200,
      message: `Method DELETE berhasil! Data dengan ID ${params.id} dihapus.`,
    };
  })

  // 6. CONNECT: Biasanya dipake buat setup tunneling (misal proxy)
  .connect("/tunnel", () => {
    // Return standard HTTP Response untuk CONNECT
    return new Response("Connection established via CONNECT method", { status: 200 });
  })
  
  .listen(3000);

console.log(
  `🦊 API Elysia lu udah jalan di http://${app.server?.hostname}:${app.server?.port}`
);