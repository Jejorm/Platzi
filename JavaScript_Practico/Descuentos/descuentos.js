function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function checkUserCoupon() {
	const validCoupons = [
		{
			name: "platzi",
			discount: 15,
		},
		{
			name: "nunca",
			discount: 20,
		},
		{
			name: "pares",
			discount: 10,
		},
		{
			name: "de aprender",
			discount: 50,
		},
	]

	const userCoupon = document.getElementById("InputCoupon");
	const userCouponValue = userCoupon.value.toLowerCase();

	const isValidCoupon = function(coupon) {
		return coupon.name === userCouponValue;
	};

	const validCoupon = validCoupons.find(isValidCoupon);

	const couponP = document.getElementById("CouponP");

	if (!validCoupon) {
		couponP.innerText = "El cupón " + userCouponValue + " no es válido";
		return null;
	} else {
		couponP.innerText = "cupón válido :)";
		return validCoupon.discount;
	}

}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = Number(inputDiscount.value);

  coupon = checkUserCoupon()

  const totalDiscount = discountValue + coupon;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, totalDiscount);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}