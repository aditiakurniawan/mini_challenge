let belanja;
let voucher;
let diskon;
let potongan;
let total;

function hitungVoucher(voucher, belanja) {
  if (belanja < 50000) {
    potongan = 0;
  } else {
    if (voucher == "DumbMerchMurahBanget") {
      potongan = belanja * 0.5;
      if (potongan > 45000) {
        potongan = 45000;
      }
    } else if (voucher == "DumbWMerchBerkah") {
      potongan = belanja * 0.25;
      if (potongan > 20000) {
        potongan = 20000;
      }
    } else {
      potongan = 0;
    }
  }
  if (belanja < 50000) {
    voucher = "";
  } else {
    if (voucher == "DumbWMerchBerkah") {
      diskon = "25%";
    } else if (voucher == "DumbMerchMurahBanget") {
      diskon = "50%";
    } else {
      diskon = "";
    }
  }
  total = belanja - potongan;
  console.log("Total Belanja    : Rp.", belanja);
  console.log("Diskon : ", diskon);
  console.log("Potongan         : Rp.", potongan);
  console.log("------------------------------  (-)");
  console.log("Total Pembayaran : Rp.", total);
}

// hitungVoucher("DumbMerchMurahBanget", 100000);
hitungVoucher("DumbWMerchBerkah", 100000);
