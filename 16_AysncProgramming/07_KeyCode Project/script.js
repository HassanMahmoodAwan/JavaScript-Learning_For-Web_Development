const show = document.getElementById('show')

window.addEventListener('keydown', (e)=> {
    show.innerHTML = 
    `
    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key == ' ' ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        
    </table>
    `
})