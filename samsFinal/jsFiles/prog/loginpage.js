document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const validCredentials = [
        { username: '23BCA065', password: 'naveenKM' },
        { username: '23BCA066', password: 'naveenRP' },
        { username: '23BCA067', password: 'naveenS' },
        { username: '23BCA068', password: 'nesterEK' },
        { username: '23BCA069', password: 'nithinyaaGP' },
        { username: '23BCA070', password: 'nithishKR' },
        { username: '23BCA071', password: 'nithishKT' },
        { username: '23BCA072', password: 'pavannanP' },
        { username: '23BCA073', password: 'praveenBR' },
        { username: '23BCA074', password: 'praveenKM' },
        { username: '23BCA075', password: 'praveenP' },
        { username: '23BCA076', password: 'pugazhlarasuP' },
        { username: '23BCA077', password: 'raghulR' },
        { username: '23BCA078', password: 'ragupathiS' },
        { username: '23BCA079', password: 'rahulN' },
        { username: '23BCA080', password: 'ramkumarK' },
        { username: '23BCA081', password: 'rathinasamyM' },
        { username: '23BCA082', password: 'raveesM' },
        { username: '23BCA083', password: 'ravivarmaM' },
        { username: '23BCA084', password: 'rishanthS' },
        { username: '23BCA085', password: 'rithikSK' },
        { username: '23BCA086', password: 'rohithKS' },
        { username: '23BCA087', password: 'rohithS' },
        { username: '23BCA088', password: 'roshanRR' },
        { username: '23BCA089', password: 'roswinJK' },
        { username: '23BCA090', password: 'ruknudheenS' },
        { username: '23BCA091', password: 'sabarishM' },
        { username: '23BCA092', password: 'sakthivelP' },
        { username: '23BCA093', password: 'sandeepKS' },
        { username: '23BCA094', password: 'sanjaySD' },
        { username: '23BCA095', password: 'sanjayM' },
        { username: '23BCA096', password: 'sanjayS' },
        { username: '23BCA097', password: 'santhoshKB' },
        { username: '23BCA098', password: 'saranS' },
        { username: '23BCA099', password: 'saranVK' },
        { username: '23BCA100', password: 'sarathiS' },
        { username: '23BCA101', password: 'sathyapadmaK' },
        { username: '23BCA102', password: 'sayujG' },
        { username: '23BCA105', password: 'shankaraNM' },
        { username: '23BCA106', password: 'sherinG' },
        { username: '23BCA108', password: 'sivasankariK' },
        { username: '23BCA109', password: 'sornavisalV' },
        { username: '23BCA110', password: 'sreejithKS' },
        { username: '23BCA111', password: 'srinathP' },
        { username: '23BCA112', password: 'srindhiR' },
        { username: '23BCA113', password: 'sudhinS' },
        { username: '23BCA114', password: 'sukranC' },
        { username: '23BCA115', password: 'sunilDM' },
        { username: '23BCA116', password: 'suryaK' },
        { username: '23BCA117', password: 'thillaiDN' },
        { username: '23BCA118', password: 'udhayaSP' },
        { username: '23BCA119', password: 'vaishnavPS' },
        { username: '23BCA120', password: 'varunS' },
        { username: '23BCA121', password: 'vasanthanA' },
        { username: '23BCA123', password: 'vigneshWS' },
        { username: '23BCA124', password: 'vikramM' },
        { username: '23BCA125', password: 'vinodhV' },
        { username: '23BCA126', password: 'vishnuVR' },
        { username: '23BCA127', password: 'viswaMM' },
        { username: '23BCA128', password: 'viswaNA' },
        { username: '23BCA129', password: 'yogeshK' },
        { username: '23BCA130', password: 'yuvarajM' }
    ];
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        const isValid = validCredentials.some(credentials =>
            credentials.username === username && credentials.password === password
        );
        
        if (isValid) {
            localStorage.setItem('username', username);
            window.location.href = '/htmlFiles/postLog/dashboard.html';  
        }
        else {
            alert('Invalid username or password');
        }
    });
});
