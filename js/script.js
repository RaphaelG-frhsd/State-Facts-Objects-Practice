let stateList = document.getElementById('state-list')

stateList.onchange = function () {
    let selected = this.value
    console.log(stateData[selected].name)
    document.getElementById(stateDate)
}