const form = document.getElementById('form');
const First_Name = document.getElementById('First_Name');
const Last_Name = document.getElementById('Last_Name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const City = document.getElementById('City');
const Static=document.getElementById('Static');
const CMS=document.getElementById('CMS');
const Domain=document.getElementById('Domain');
const Hosting=document.getElementById('Hosting');
const Search=document.getElementById('Search');
const Social=document.getElementById('Social');
const E_services=document.getElementById('E_services');
const Support=document.getElementById('Support');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}

const validateInputs = () => {
    const First_Name1 = First_Name.value.trim();
    const email1 = email.value.trim();
    const phone1 = phone.value.trim();
    const Last_Name1=Last_Name.value.trim();
    const City1=City.value.trim();
    const Static1=Static.value.trim();
    const CMS1=CMS.value.trim();
    const Domain1=Domain.value.trim();
    const Hosting1=Hosting.value.trim();
    const Search1=Search.value.trim();
    const Social1=Social.value.trim();
    const E_services1=E_services.value.trim();
    const Support1=Support.value.trim();

    if (First_Name1 === '') 
    {
        setError(First_Name, 'First name is required');
    } else 
    {
        setSuccess(First_Name);
    }

    if (Last_Name1 === '') 
    {
        setError(Last_Name, 'Last name is required');
    } else 
    {
        setSuccess(Last_Name);
    }

    if (City1 === '') 
    {
        setError(City, 'City,State and Country is required');
    } else 
    {
        setSuccess(City);
    }

    if (phone1 === '') {
        setError(phone, 'phone is required');
    } else if (phone1.length === 10) {
        setSuccess(phone);
    } else {
        setError(phone, 'Password must be 10 numbers.');
    }

    if (email1 === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(email1)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (Static1 === '') 
    {
        setError(Static, 'Estimation Cost For Static Website design is required');
    } else 
    {
        setSuccess(Static);
    }

    if (CMS1 === '') 
    {
        setError(CMS, 'Estimation Cost For CMS Website Design Layout is required');
    } else 
    {
        setSuccess(CMS);
    }

    if (Domain1 === '') 
    {
        setError(Domain, 'Estimation Cost For Domain Name Registration(Yearly) is required');
    } else 
    {
        setSuccess(Domain);
    }

    if (Hosting1 === '') 
    {
        setError(Hosting, 'Estimation Cost For Website Hosting is required');
    } else 
    {
        setSuccess(Hosting);
    }

    if (Search1 === '') 
    {
        setError(Search, 'Estimation Cost For SEO is required');
    } else 
    {
        setSuccess(Search);
    }

    if (Social1 === '') 
    {
        setError(Social, 'Estimation Cost For Social Media Creation is required');
    } else 
    {
        setSuccess(Social);
    }

    if (E_services1 === '') 
    {
        setError(E_services, 'Estimation Cost For Email Services is required');
    } else 
    {
        setSuccess(E_services);
    }

    if (Support1 === '') 
    {
        setError(Support, 'Estimation Cost For Support(Free For Months) is required');
    } else 
    {
        setSuccess(Support);
    }

};
