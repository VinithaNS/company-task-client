import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainBar = () => {
 
  return (
    <>
      <Navbar className="title" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <div className="logo-image">
              <img
                className="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABX1BMVEX///+TKo8GCAcHCAoAAACTKpH8/Pz//f+UKo////74+Pj/9/+UKZORK5CTKo7k5OS8vLwnJyeHh4ejo6Px8vLT09O2trb8//sABwDMzMxGRkb/+v+MLpAAAwDCwsKKGoNPT09wcHA2NjbLpscMDQ+UKJf57Png4OCUlJR4eHi6i7qRLIkJBQ2aJ4yFhYUvLy8dHR2KIn9hYWGJNICMKpWaJpT13vTMqMysrKyTU45eXl75//ayfrKINogYCRd8NnpsMGsuFjBeLl2ZS5dAHEORJHp0HHHs4euMA4V+GXvYvdfs0u3w4/LOs82gY5u8kbnatdmnWJu+l798KnTz1vWsf6d8GH+rbJ6WF5mYRInexNi2aLOhTp2XKoV1MnRRJFEoECYVCiVHI0uOWY8iAB9zKmMtEjO1ebCCPYYhEh8pFStQJUYZBhBhJlcQCRr4yPnHi8ZAEz98B2uRUIVJL1R48miiAAAVfklEQVR4nO2ci1vayN7HE8gNMok3NCjReAtqB1SEoBYj6HrcolW7dUu7PW+12+527bb2vLvn/f+f9zcTLkEgREp7PM8z36dVCUlmPnP5zW+uHMfExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEFKgYyKj/wcXC3R+T5aHHQiYicRi6gM8wYk31vV+WJIlEZrixgDgY8GL4Odz3EtEcCQdYzz6ggzQZLmIqJUuQ1FIqNaw3SpwE/zguLkFcVXitFLaAlkCGFJfhBQ19fWxo7pHCZJS++mXtikucEUupKblV7nqS1r+Ae1NqOp2KGV9P5pP69OnpafGpKgfEoL/qUUpMTq2uP55Z3BwbiwojUDLPdkHnL/cunj87LcqkUtDSInuFVk5JkG0Qh+LJ9sXe+e7NzU3Zfc7JRmJjcXFxZn5hfHVneqUewn2o5UampU8udt2cBcrlf3p+moqV5JQ8YI2MT68+Fto0AhRLlg6yRCt3nDu+PH9+UpSNEjVAEjG0JS798/aL3ePqcS5nibyu89h6ZKRiibYXbaztjNwLEQoNKfPqyYvLqiWCeBIL3a5dXhTBnKUGqOjxKUoX9atOiJAoIqQo2ayiiKhWPT97CpAlSGFDVl9f3NQgClkQfKmAGoSzkZYo5fhk6NjEJMCIySe7liaKDuJBHqFdKNT2nnL3NGWQtCtrd+naCKkcB2NsaiKyn9gvXpPiKqfPdp9YOjZNE2PFocnQnbBOuTERMhdjMagK6Zc5zdR1jHW+IdPUePuVe8bds5SObEHokUgvQi/5dA2S0/sDIK1fTmR1KVcrQAbzgKVjTdN0nZQnvQehB7maCBMjMMjq68uqRksPhAAirxYhDhCW8+Q8HRqOVI3VLtnXRlgXEAILLS8I6dY//8dSkAi8cBm+4DX4hsSE5KHanZAwLs9x/duQeCm2XYU05RVSeiBACByRNNQ0/AYD9S9FKEIhAUdmevB1ELZJhETt+gUfSEgY15qGu6dK8tIxFmnO0RqimUSalnUczYTLil4ughkIlYGTvTKwD2Fv9SEExsV4H7MaM7Zr2TfkZVBoNNO9qlwfHXy4Pqy4OOvYtDxl82o4wukAwG9FGBE24oGEknR6bDuYEmbd8u1bQZhNJpNQi399d4WztAg52ffp/sVUklaCAL8ZIeRiYBbGUy6Gkknzyr3+kkwSK5jJZKLRWUF450K153XTzD7qC8hJ8c0gwEEJERBygYQRYaFnpIyUYezRMDWw0Fcf4T0ZSkd+RqIZIXOlFMws2B3rmdS3oK4HAn5Dwogw15MwxhWr1Ijpjl7JRIRINAJFNEkfS9LMPMQOtCCaXlbBswrKQW5FWP4GhHoYwshmL3sKfuDLrEJepChXGQIWTQr7B0d/HR1ARUwmo5lkspKFtpfnq9tyYB7GuYXgLPymhMJOD0S5dFqjgKhQ/gglFArmUaUM7tSbfPnwN0COJpP78FlXkHOjBnY1pERAO9HwvGPcUk2zLJ54ZKQF7ipoGTXeczd40gl4FEtxdc+7N+FMj2jJsYsnYEY1DRU+CEImkvz4O9bEQqFgahiXj4QklNPIh7wO7YhTex0LNFlz3QmXCd/W+vj4+MIIZ8gne6CX+ZoFfgXU/W6Qjq2ZCrhr1er53qNHj/44A884sQZaWOwNKYz0IJTzDhZJE3+VARsTzZQh2EZSmvkDIZqMZIRDE7xkXdsL9h3WuhMKy6uNwKELbKgq6QVyP57t1sD5FrsRashGDs69PFFlMs6gkk5HI+TptR6MUEy7ExaPHXAFeeweCEkwn1eiL1Wx4h6QtiPzm4sw5sWbdCBhd3dNGG/5xjHoJRl0LAq6nOrr3ZzidCuppmbz1fenKleKef1WQ/aNqCQWuiIK6z2itW0pxNnFl2BWwG5qr3jcInRsyFkSywrx81G1GOg5RLoQCsSMt56iwyOcN4wRK6kvq6ibM0qCeqFyUkzyRv3aRtvAe9nphig87hGvP2wMLQ5ybwUojvt5x0ZKM6Rswcm/E6KRqPDOBGfcsc6CsjDeLQuFyTaXsWmqYkZMTkmpc1vROwmxY72QY6Rpao7I+WwcGIOpLojCfI94/WBjEdLMPRIyUeEaZ81CK1VFE5wAiHck+daFPg2ytu9JuNzThlNJpbSpdyO0f1CDGiaJG+9E7EUo3zimjnR083E2kySFUfHVfdJty4N/E4UGAzptZu7inoRgwoNcYvCnnnVrHZ3qqRE0ciJxsbEOxF6Eap4Q8kCYBIeGEorthPskDwWP8MV9CYNHUlJyiTvvUhHRHtevOzp6f8L9ZCMP7xB+hkxMCleDEJIsDHqilIqVTizlLqBYK5b6jO/FY5t3EXuWUkIoQindn+1BuE9KqdAopQEx7kIYWAvBsnKyod6Iim9oSBQ1XdyVJTnQBebIUElYS3ODTMcxUf6jZ2mw7rPfSMc4P0vroQseFLKWgsLsIAQ3o+9QmMzt8UqrfeKhG5e1nquS0W/aZrKDcLHHneeiRgjxAZAIB3ndQS1LA9/gCol38k+s6DppLQLC7SAUNvsPoEjcdlXErXIjIjFbPUlJsX55yHUQbva48UKDXMMKvoYnMpkKam/xX+XfkngL7whhnxa/k7BXG9ym02NEnKq6FBFlj59yIWbeFu8gCmPd7zNOqllRfKNoV5kodJUOXMfXQGGkHdJoCxVe1xW9HOi1dRKOhyF8egmGrlX1NTubTxt9CynH3fXdehGWitWsqb3RC/ggA4TCO+hGNINT3IrntL3NA3hWPw8cGu4kXA1DqOZt0+cKI138QQ4zIbQWkjDFvXcwDx0ZvQI9JTA2n/J0oFmDCiHiymfw2eDiLVg7hHJLgdWqk3BiQMIwj3W4Nb0IpdiS5RVL9wP06KFdOLhyTRHcU+huXGdmIQuTyd/ypAeMcsXARuqBEpaM9KU3JFrIf4HOBRm3ODislMvlw6Mv4MxAtpLmnlRO5Q8ucCjqgRJClJcK1EzbuPKFjrLRoVI6SOONKkIZRWS67e9ToxTkS40MrR4OlTCWKqkmsdUKMt/8Tqqip2jjf5J0OABRt15yJTloan9Qwn8UFKXuz0D9z2poN9QCgrCWBvw/9awGHfiCBrrKzAr1wVLik0QgO/crLhJNEeHLp32CHBrhL+qQCWV1r+o4OiHU3GvSEW4oOZs5unJFm8eKUz3rN6r/QAljZJVDerc+byGKbuXos0AnLuAn8GEF2Y6IsfVI6rc044ESgvsXM4ziTQ7TCWWsi7h8eH10cHBw9O6wjJVslkxYKrkX/ZcrPFhCWSqVpOKNRQYodTK5riDNdF2XTCDatmZCYy9ae6rRd+lVJ2Eory39D83nl5pAmB+McDngZuiMFXctXvRcUpKUrS6Uju1C7TkZGusX5H+YMCIEEpZS6Ytj3VuGQafwW76pXi2fqLLc3xUekFDtILwMRdjheQcSxkrgrZz8UtM6CfnaXjrWGnL+byWEMmhIcnr7B1HvyMN/qWBjwqzEHLiUkjnYhjRFR5ehln7ci5CTyWq6Elf8X7GZh7q31kPRd09kshylP+SAhD/mCrxvnEb/JoQGaTHk1NKl1SyltP33LE31vEhnG+5P2HvqOYhQ/AaEZL6ES7+vofpUKYiuOqGE2ax+/FyFFuX+rcVDIjTU00vLLpiUSadrhrTGrBBCWu08PUh7OCDhcSjCx/chBFv5rxwiy+hozSPCRDzNU7IAzdotxu/v04QifGppttj0aRBYmnCE8yEJ6VrjOFc8tm1AAicUmW7+6vb6r7+ubyuuqesayVDkWLtpSeICB1BWBszDJ9gWfa7GNyEEv9Qkk+cQgAau9z5xvcHvznwBzxspNGAn90KVgpciTz5YQolLnUPfQkfghbpXH5prHkhvP/PXJWSsaGqOWF0KHsToQjg/EKEzXEKOk2R5G/qHhNC8uf7s9Q+/RMlDGTKicevqiq4BfvVn6bsQDjkPiUOjVrFiIx1pNx/IwHe0tfS1PoqhZB1RQ865GtgmDkj4FAj1lqXRMaoWwzx3d8y7l+dtgCuzB0koanz25qAeR9L5zZCxKCCEJ99hshJDdKyTwA0KX5GHPkIclrBjjrQXIWf8SFd9wbuvyYR2ZHZW+FS5cW/KlesvwiwdTbzF1A1AL7kgWzOcPBw6ISBe0DlKUaEj+MmocF12Tdu2ST/4CLIxmowIVwg54DAePw0ypg80D+WS6tL3K+6vdL3efoVMsJk6WSfluIdChBAeuZqjY8daCuoHdxL2mtH7roRq6dTrFeoVqHxQIg81MiULroWiiJptHpLFJplMBdpF7Djvg4IckPDUKmR9nTVew8MlTBkXNRGZetYlc09QRMGaNb1EzbbJ8GImk/wEFl3hUTU9/Dw8zQGh6CPMVk/DPNe5VKH7fTL30gRCBd/Q+cPPZVFpza5hhHB5n6zAfOvaIp0iHT7h60EJw9ZD7pcCOC2IzGaDlflEJplahIqD8Duwp3Qthqaj2klAkNODEZ7cJcTDJvzbVhTbcWlTIVzZmHd8lQJ6whUhkokIh1lkUlPTWx2LL4WN+xPymjhsQvVvm6yOzb8DOxOZLb9yNbsZmi1qppYXyBzpuzcI8hAFLYrqJOwxRnuX0My2io2mIX249TCmWraOdcf9RIzmlzwynfZFSqIrkFb/k46UrOk8JMKQeRiTIQ+hqWsQOqbSvuBTyVPCW6UAhNb3IXwdijC0LSXTBnS1CVll+buj3SHkrwjh7K1T0IHwfvXwQRCmuJ80QkgafCC8RYVsO6F2SOthxSnwWTMXtMB0QMKznDgkwh5r9bk98JmwrpXJfp7kgWmThTO8N2+h8bru/gl5GMmUHQjatILC7iTstUqpTUtVB7fGvDVN1KtBbVIAYbzrfanSs1eYzo3+GSUrMSoiGFad98aGCrboVsik8OyBq+s21mpBPk0nYSTMDs+zb05YrNGRQ3xLvLbZ/bLzynGQ10Aptn21T94kHJrg0WjaD6l7ES4PRpgLQxgPSygbqV2y2xZs5q/gYidn37pQFbxRBR7jm7ezpA/8wUWYbHxeChpse6iEUBFs0r0VTdJTArfmYyVPaiIZYstX9qGMRiKZiuhgEwgDFyuMDkYI9dC31BuSV7NOuP6zJKEJQUWL7L6zkfvXLFlsMiscVVyomu7N1REZk/qSnP3LRY6im/pPqaCBmkEJa7ZvsWCLsA9i+DyMGeqeppgmQnz5bZL0BaOCsH90dPRpPyPQVSfCwY1Gd5eCBQgKtpOwd6p+T0K5ZBRrCjKhAuDyb3SPeYTuzwOR0cRk8oNrEkLN/kkuBU1edCEMs5O8K2H/s2MSoUupbJS4ixyZMVQUvXwgeEu9PtOefSaSzEAO2jY4BbxZ/blUCip2wyM8C0E4EpbQSMkGp/4bug28ktVF6ER58fRWRiWF/UNXo/RaYZtsOB0+4UUOei3thNucFGK2Mryl4bjSqYtsjcyjifjy+le60Tk5S7Y6X5fJoL4IXcPcHrQUgRNsAxI++h6ERurkGNlkIz683y3/fvvh4OOffx7835VrIpvM2CiKtdt3qP0hE6ZKxrOqiJBpagiQdOy6ZPpQ944f0HQ9a71P950/7CCMDECofwVhQGhyqZQ6KZvQo4fccgpmATnk0AiNTpQicG1y5+n+2wO6EPbY1nmXUPStLQ9L2LHfIjA0Q1bjBl34hTBd3+adH6OQ00egrcfVR+lEoBn9GsK93Jus01wdgZCOC8HryRuEy/cgpEqpF9UnDlm8p2kmONp0uQL4i3bu36H6a11GEzfC+DTbVcS7ZlOubddehyBMhB3FaMkwUsU/qhZyqJtIQ8OYt5+Ut9NquHNNxtqPTBI2Qh0dE3v+xBEdKtuxkfMqXOeJHFDh55sVtvo9YpRKMa74vAyQyLZJgMixjs+fpbn+S2m8MEeFZZ+ijxOhDgAqydt5N9+Q65aD5/CaoXEry+3p2XeTlUyOoSpxqdPtP3ZvXNfNl88fPSt6O3dDnTEkcb5T1cihOOEOqkpJhqT6xJHj2UKEFpfiCb/CHOUmy5IRp42Kmk6nVbovWZI5ORX7BqfvMT1E0aIZl+p/+683im/jttY137Nt33HNEu+9wPd361Lr3e1x8L6JN+6Pt0Kmv+KSP8jWK/qX8ji5qek5+UL1k7ZRt17ajKU/ZeJ3gm28wPsV7+aktV4Y91Di8Fe8PeqSF0iXmPbV5GO4e3prYWFtYeux77m5mc3NzflVL0lXZzaXN7a802TWpxu3jHoLNXfIPqIFeMPCwhbZYbs+SqOwOj8WGXs8RW+ZmKEPrdINuPG1jeXlsa3JViyniVmdINGe8NpH+CBxdXPrnSuxUndgfRcnyR+LO32zcVogNnxnZ1UYHR315aGwMLWzMyHQGK4JO3PTo+sCPfpwZqpxz4R3Msn6GsHcmZqBJ6YhuBm6c2pdmJibnBoXKNq4ECER2aJJsiPsgBYEPyEXn6YbrhJ0I/kceKuSNDKSiEzADz8hvbjjXZwW4lJiqt/GbJISXmmbbB99Tnju1AzZmyBtTtG3bEx0JRxf8z4ukK+bhORm8oFubhgf3xiHVyxQwvEtL8qSn1DiVukxABvkloXHXt3kIlONHGoQcvQivQpPkXTodXiIn7DtdzthgjoA9dOO5lf7E5Ib6O/IqHfRgxqfJBuo6x/oPlxppY0wTghBq2OkfI7WvxCaYa20ulmNi4QQbl7rdcZNH0JubHF8Ymo6wQ1KuNxGuM5tzTc+zAkLqzuj/qM3SFwT3laWFUjZ6WZxCkM40c+17UEoJVbXthYFWi2kryccB4LR+gduen1hflN47K+Hj+eFLc9cbk5wa01nNRRh0KaUAMK6WZ8fH5QwcicPSVp7H7x2YMXX950WJqcbn6Cwto4AC0O40G/zeQ/CUYEm6QKNfT3ImRYhjeSUR7jWlXBzqp2QGJE1+mFxldiRhK9nWI9rPR4+m9efkBtpVtp7Ek56STxPzwCaoatqE96rZ7w3SqRCkeYjsTnRjXCGFrW4Z+lIHsIrFynhVt2WJtptKVd/7fJMaw2vn7Ae6B3CyeX5PoD1lOi0NPPC5iL0HVeILzInQN9cqB/MNeO1ud49/h7lVp3Qa1SgPV6GntIiTXrSZJJz08br34wtRqBn2J1w3Xe2ip+QaLqdcAwMxWrfFj8+0v67qUnwAOYSXqjxybnRufpRxyOevHDnRqdXGgEk6qT1NlpaaT1T/6r+TQLePOo/Iia+0iVC9IGWl0YDjfsvkkuhuuvfTPdwHf9T8vvPA8RX4npR/hewMzExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExfVf9PxVc6A7Fw3iZAAAAAElFTkSuQmCC"
                alt="logo.name"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ color: "white" }}>
              <Nav.Link href="/">
                <span
                  style={{
                    color: "white",
                    fontWeight: "600"
                    
                  }}
                >
                  Home
                </span>
              </Nav.Link>

              <Nav.Link href="/companies">
                <span style={{ color: "white", fontWeight: "600" }}>
                  CompanyInfo
                </span>
              </Nav.Link>

              <Nav.Link href="/login">
                <span style={{ color: "white", fontWeight: "600" }}>Login</span>{" "}
              </Nav.Link>
              <Nav.Link href="/register">
                <span style={{ color: "white", fontWeight: "600" }}>
                  Register
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainBar