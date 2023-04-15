// scripts.js
/*
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'*/

// scripts.js

const STATUS_MAP = {
    shelf: {
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
    },
    reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
    },
    overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
    checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    }
  };
  
  const book1 = document.querySelector('#book1');
  const book2 = document.querySelector('#book2');
  const book3 = document.querySelector('#book3');
  
  const updateButtonStatus = (book, status) => {
    const reserveBtn = book.querySelector('.reserve');
    const checkoutBtn = book.querySelector('.checkout');
    const checkinBtn = book.querySelector('.checkin');
    const statusText = book.querySelector('.status');
  
    statusText.style.color = STATUS_MAP[status].color;
  
    reserveBtn.disabled = !STATUS_MAP[status].canReserve;
    checkoutBtn.disabled = !STATUS_MAP[status].canCheckout;
    checkinBtn.disabled = !STATUS_MAP[status].canCheckIn;
  
    reserveBtn.style.filter = STATUS_MAP[status].canReserve ? '' : 'grayscale(100%)';
    checkoutBtn.style.filter = STATUS_MAP[status].canCheckout ? '' : 'grayscale(100%)';
    checkinBtn.style.filter = STATUS_MAP[status].canCheckIn ? '' : 'grayscale(100%)';
  };
  
  updateButtonStatus(book1, 'overdue');
  updateButtonStatus(book2, 'reserved');
  updateButtonStatus(book3, 'shelf');
  