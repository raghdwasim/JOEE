document.addEventListener('DOMContentLoaded', function() {
    const trialForm = document.getElementById('trialForm');
    if (!trialForm) return;

    trialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate Parent Name
        const parentNameInput = document.getElementById('parentName');
        const parentGroup = parentNameInput.closest('.form-group');
        if (!parentNameInput.value.trim()) {
            parentGroup.classList.add('error');
            isValid = false;
        } else {
            parentGroup.classList.remove('error');
        }

        // Validate Phone
        const phoneInput = document.getElementById('phoneNumber');
        const phoneGroup = phoneInput.closest('.form-group');
        if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
            phoneGroup.classList.add('error');
            isValid = false;
        } else {
            phoneGroup.classList.remove('error');
        }

        // Validate Student Age
        const ageInput = document.getElementById('studentAge');
        const ageGroup = ageInput.closest('.form-group');
        if (!ageInput.value || ageInput.value < 3) {
            ageGroup.classList.add('error');
            isValid = false;
        } else {
            ageGroup.classList.remove('error');
        }

        // Validate Program
        const programSelect = document.getElementById('programSelect');
        const programGroup = programSelect.closest('.form-group');
        if (!programSelect.value) {
            programGroup.classList.add('error');
            isValid = false;
        } else {
            programGroup.classList.remove('error');
        }

        if (!isValid) return;

        // Gather form data
        const parentName = parentNameInput.value.trim();
        const phone = phoneInput.value.trim();
        const studentName = document.getElementById('studentName').value.trim() || 'Not specified';
        const studentAge = ageInput.value.trim();
        const program = programSelect.value;
        const level = document.getElementById('currentLevel').value;
        const days = document.getElementById('preferredDays').value.trim() || 'Flexible';
        const time = document.getElementById('preferredTime').value.trim() || 'Flexible';
        const msg = document.getElementById('messageText').value.trim() || 'None';

        // Construct WhatsApp Message
        const whatsappMessage = `Hello Elite Swim Academy,\n\nI would like to request a swimming trial session.\n\n*Parent/Customer:* ${parentName}\n*Phone:* ${phone}\n*Student Name:* ${studentName}\n*Student Age:* ${studentAge}\n*Program:* ${program}\n*Current Level:* ${level}\n*Preferred Days:* ${days}\n*Preferred Time:* ${time}\n*Notes:* ${msg}\n\nPlease contact me to confirm. Thank you!`;

        // Show success alert
        const successAlert = document.getElementById('formSuccessAlert');
        if (successAlert) {
            successAlert.style.display = 'flex';
        }

        // Open WhatsApp after a brief delay
        setTimeout(() => {
            const waLink = getWhatsAppLink(whatsappMessage);
            window.open(waLink, '_blank');
        }, 1200);
    });
});