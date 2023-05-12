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
- Penambahan data Risk Profile Question dan Risk Profile Option di table RiskProfileQuestion dan RiskProfileOption
- Penambahan Produk dan Layanan Reksa Dana di table ContentParameter, dalam format HTML
- Penambahan Denom di table BusinessParameter

## Pembelian Reksa Dana

## Penjualan Reksa Dana

## Dashboard & Portfolio

## Notifikasi

- Cek SID (Single Investor Identification). Apakah SID sudah ada atau belum?
- Jika SID sudah ada, maka tidak user tidak menampilkan pendaftaran reksadana
- Jika SID belum ada, maka user harus mendaftar akun reksadana dari awal

## ActivityName dan ActivityCategory

- di package id.co.ist.digitalbanking.auditmanagementservice.constant;
- tambahkan ActivityName : REKSADANA_INQUIRY_STATUS
- tambahkan ActivityCategory : REKSADANA

## Pertanyaan Question and Answer Terpopuler (FAQ)

1. Pelajari Investasi Reksa Dana Sekarang

- ada 5 pertanyaan (kita coba ambil pertanyaan 5 dari 10 mulai paling bawah)

2. Ketika klik "Lihat selengkapnya", maka hit service get pertanyaan terpopuler dan pertanyaan per kategori

## FAQ

- FAQ table ditulis dalam paragraf saja

- cukup mengembalikan 1 service tapi data 3 arrays

```json
{
  "faqDefault": [{}, {}, {}, {}, {}],
  "faqTerpopuler": [{}, {}, {}, {}, {}],
  "faqPerCategory": [
    [{}, {}],
    [{}, {}],
    [{}, {}],
    [{}, {}],
    [{}, {}],
    [{}, {}]
  ]
}
```
