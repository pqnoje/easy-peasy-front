import * as mercadopago from 'mercadopago'

export class CheckoutProvider {

	public static create() {
		try {
			mercadopago.configure({
				access_token: ''
			})

			let preferences = {
				items: [
					{
						title: 'Meu produto',
						unit_price: 100,
						quantity: 1,
					}
				]
			}

			mercadopago.preferences.create(preferences)
				.then(
					paymentResponse => {
						console.log('~> response: ', paymentResponse)
						console.log('~> response.body.id: ', paymentResponse.body.id)
					})
				.catch(error => console.log(error))
		} catch (error) {
			throw error
		}
	}
}