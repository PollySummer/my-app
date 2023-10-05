const apiUrl = 'https://my.api.mockaroo.com';

export async function getShipmentData() {
    const key = '5e0b62d0';

    const params = new URLSearchParams({
        key,
    });

    const responce = await fetch(`${apiUrl}/shipments.json?${params}`);

    return await responce.json();
}