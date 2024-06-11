document.getElementById('add-contact-btn').addEventListener('click', function() {
    const contactList = document.getElementById('contact-list');
    const lastContact = contactList.lastElementChild;
    const nameInput = lastContact.querySelector('.contact-name');
    const phoneInput = lastContact.querySelector('.contact-phone');

    if (nameInput.value === '' || phoneInput.value === '') {
        alert('Não é possível inserir um novo contato sem informar o anterior.');
        return;
    }

    const newContact = document.createElement('div');
    newContact.className = 'contact-item';

    const newNameLabel = document.createElement('label');
    newNameLabel.textContent = 'Nome:';
    
    const newNameInput = document.createElement('input');
    newNameInput.type = 'text';
    newNameInput.placeholder = 'Nome';
    newNameInput.className = 'contact-name';

    const newPhoneLabel = document.createElement('label');
    newPhoneLabel.textContent = 'Telefone:';
    
    const newPhoneInput = document.createElement('input');
    newPhoneInput.type = 'text';
    newPhoneInput.placeholder = 'Telefone';
    newPhoneInput.className = 'contact-phone';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '🗑️';
    removeBtn.addEventListener('click', function() {
        contactList.removeChild(newContact);
    });

    newContact.appendChild(newNameLabel);
    newContact.appendChild(newNameInput);
    newContact.appendChild(newPhoneLabel);
    newContact.appendChild(newPhoneInput);
    newContact.appendChild(removeBtn);

    contactList.appendChild(newContact);
});
