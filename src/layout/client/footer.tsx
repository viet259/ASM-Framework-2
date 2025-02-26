import React from 'react'

const ClientFooter = () => {
  return (
    <div>  {/* Footer Section */}
    <footer className="mt-16 bg-green-900 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Die</h3>
          <ul>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 1
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Info</h3>
          <ul>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 1
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Kontakt</h3>
          <ul>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 1
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:underline" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>© 2023 Lorem Ipsum. All rights reserved.</p>
        <div className="mt-4">
          <a className="text-white mx-2" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-white mx-2" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-white mx-2" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="text-white mx-2" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer></div>
  )
}

export default ClientFooter