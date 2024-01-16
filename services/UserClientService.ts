export async function getUserData() {
    // Ваш код для виклику API для отримання даних на клієнті
    const response = await fetch('/api/userApi')
    return await response.json()
}
