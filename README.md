# Catatan Reksadana Development

- service `invest-account-service` branch `devmaster-reksadana`

## ESB

- harus di update data nya di branch development `mvn clean install -D skipTests`

## Fitur

1. Pembukaan Reksa Dana
2. Pembelian Reksa Dana
3. Penjualan Reksa Dana
4. Dashboard & Portfolio
5. Notifikasi

## Pembukaan Reksa Dana

- Penambahan description rekening Reksa Dana, seperti description, title, feature, description card itu ada di table ACCOUNT_PRODUCT di PARAMATER_MANAGEMENT_SERVICE

## Pembelian Reksa Dana

## Penjualan Reksa Dana

## Dashboard & Portfolio

## Notifikasi

- Cek SID (Single Investor Identification). Apakah SID sudah ada atau belum?
- Jika SID sudah ada, maka tidak user tidak menampilkan pendaftaran reksadana
- Jika SID belum ada, maka user harus mendaftar akun reksadana dari awal
