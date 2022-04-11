import axios from "axios";

export default class CurrencyService {
    static async getAll(url) {
        try {
            const currency = await axios(url);
            return currency;
        } catch (error) {
            alert('Упс... с сервером что-то пошло не так, проверьте подключение к интернету и перезагрузите страницу')
        }
        
    }
}