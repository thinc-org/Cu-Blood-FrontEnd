import Router from 'next/router'

export default function redirectTo(destination, { res, status } = {}) {
  if (res) {
    res.writeHead(status || 302, { Location: destination })
    res.end()
  } else {
    if (destination[0] === '/' && destination[1] !== '/') {
      Router.push(destination)
    } else {
      window.location = destination
    }
  }
}

// just a template that maybe used in the future