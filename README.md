# signers-app

**signers-app** adalah aplikasi web berbasis Vue 3 untuk mengelola daftar penandatangan SPT. Aplikasi ini memungkinkan pengguna untuk menambah, mengedit, dan menghapus informasi penandatangan, serta menampilkan status wajib pajak dan penandatangan default dengan antarmuka yang sederhana dan responsif.

## Fitur Utama

- Menampilkan daftar penandatangan SPT
- Tambah penandatangan baru
- Edit data penandatangan
- Hapus penandatangan (simulasi, karena server membatasi API DELETE)
- Lencana status wajib pajak dan penandatangan default
- Unit test dengan snapshot menggunakan Vitest

## Teknologi

- **Vue 3** + `<script setup>`
- **TypeScript**
- **Tailwind CSS** untuk styling
- **Cleave.js** dan **vue-cleave-component** untuk format NPWP
- **Vitest** & **Vue Test Utils** untuk unit testing
- **Vite** sebagai bundler
