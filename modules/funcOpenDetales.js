function openDetales() {
    const detailedInfo = document.querySelector('#detailed-info');

    detailedInfo.style.display = 'none';

    document.querySelector('#detailed-button').onclick = () => {

        if (detailedInfo.style.display === 'none') {
            detailedInfo.style.display = 'block';
        } else if (detailedInfo.style.display === 'block') {
            detailedInfo.style.display = 'none';
        }
    }
}
export default openDetales;