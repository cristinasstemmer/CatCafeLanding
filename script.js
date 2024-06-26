function showThankYouMessage() {

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var dateInput = document.getElementById('date').value;
    var reservationDate = new Date(dateInput);
    
    if (reservationDate < today) {
        alert('A data da reserva não pode ser uma data passada.');
        return false;
    }

    alert('Obrigado pela sua reserva! Estamos ansiosos para recebê-lo.');
    return true;
}
