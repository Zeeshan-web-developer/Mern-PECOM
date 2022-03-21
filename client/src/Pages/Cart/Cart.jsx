import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Styles from "./Cart.module.css";
function Cart() {
  const history = useHistory();
  return (
    <Card
      className="m-4 shadow-lg p-3  bg-white rounded"
      style={{ height: "100%" }}
    >
      <Card className=" bg-white rounded" style={{ height: "25%" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr className={Styles.product__heading}>
              <th>Product</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody className={Styles.product__item}>
            <tr>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <Card.Img
                  style={{
                    width: "100px",
                    height: "100px",
                    padding: "10px",
                  }}
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUYGBgYGBgYGBoYGBgYGBgYGBwaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrISsxNTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAP0AxwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABFEAACAQIDAwgFCAkEAgMAAAABAgADEQQSITFBUQUGImFxgZGxMlJyodITFyNCgpLB0QcUM2KTstPh8BUWovFUwjRDg//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAICAwACAgIDAQAAAAAAAAABAhEDITESQTJREyIEYXEU/9oADAMBAAIRAxEAPwDpK/NLDhmAapoSPSXj7MH/ALVoetU+8vwzocUem3tN5wd5FyY1GH/tWhxqfeX4Yx5rUONT7y/DNyK83kzUYZ5r0ONT7y/DF/tahxqfeX4ZugxmM3kzUcHzn5MSiaeRnGZrG5Q/+s43G42oruoc2ViB0U2D7M9A57DWl7U835R/av7Zk3KV9LQimuHXc1cIuIpO1R3DI9rjIAVKgjTLxvNHE8kU1+u/inwynzF5MquzqoGUqCwJtqPRI69TO3HNVmN2YDvvEWby1Y7UU9nDNg13M/8Aw+GQbBj1n/4fDNvlTDfJVGQbFOhI1I3GU6tK+omcpJ1bHjGL3Rn/AKoPXf8A4fDHGEF/Tf8A4fDDhJNF1iucvsf8cfoDV5O6DZXfNlOX0DrbTTLxnBpyzXJAz9vRT4Z6QTacvzs5tnD1adZVtTri9tyVALsvUCOkPtcJTHOTTtkckYpqkZyYyt65+6nwzp+QMH8pTDO7k3I0yDZ9mYlLC6eE67m/TyoB1mTjnlKVWaWOKjdFpOQaZ+s/ivwwlfm/SCMwZ7i1uku8+zNOlJ44/RP9nzl3J+L2QUV5I4DlajkqUER2s7lWvkOmmzo6TraHN2kRqz/eX4ZzHL+tfC+234TvcKNIsZScVseUUpcMx+bNHcX+8vwya82KPrVPvL8M2WGvdJrH8n9iUjGPNehxqfeX4Y02mvewim8mLRZxXpv7TecAwO6WcS3TbT6x85XfWBhGEZnERHbF3TGI5pJWjNGzQmOV55t0qPtTznlH9q/tt5z0bnejM9BVUsxY2CgknZsEfkf9Hoao1XFEm7FlpI20bvlHH8q+MVQcnopGcYq2YHMjDYmq5FHPlCkMwJVB1FtndtnqPJnIgQh3c1HGoLElVP7oO/rM0sNhlRFRFVVUWVVAVVHAASTmWh/GjF31kp53LS0jF5e5LSsPVcDouBs6iN4nHvgq9M2dMwH106Q719IeE9AxJvKFVLzZcSk7DjyyiqOBqt/mzxBksMrObIrN2AmH5fbLjFU7HWme8NlPkPGdmznZukI4bbTfDolmaSaXTF5L5HNw9UWIN1S4Oo2M9tO7xmvyjhEqoadRQysRpqNRqCCNQRxkwbdZjql9TOiMElSRzSm5O2cdjuZjqL0KmfXRHsptwDjQntAkuTKL01y1EZGudGHkdh7p2ypChQRZgCOB1Hvk/wDljdrQfzSqmc7SaSxx+ib7PnNivyUjap0Tw+qfymNyrTZEZWFjdew67Rxizg4xdhhJOSOK5b/+ThR+834Tv8OdJ5/yqb4rC9r/AITvsPskofFFJ/JlgtrJqYE7ZJDLCBgYpEMIpgUW8Sem3tN5wJaGxPpN7TecFeB9AMWkGbqkyeqDL7ranZMYQVibDadglpOS3OrsFHVqfymjg8KEFzq288OoQjLfbs4fnKxx/ZOUvoq0MKoN0WxtYufSI7dwltEA2Ry0GzyyX0TbslBtFnvGYR0jFeprKpp67PCXWEZV1masN0clytycHxNIvSDqFsKhZgytmuBZTbdwm4mHP/f95dKXYH/NkmRrEUKbGcrSKbU9ZJUtDuusjaGgElkxTECRIiqRCYsFDBV6auuR1DKeP4HcYVK14QMDDSaBw4bl/miflKWIovmWkTmptq2UnVlbfbgRNPDvpsnTBLaiZeOwoXpAW9YcOsTmyYklcS0ZtvZTuSYYCCz66QiNJIcIqxRJFCAtYn029pvOCvCYkdJ/abzgiwEHsAmhuTaN3zH6uvfu/GV2ccZo4AWS/Ek/h+EeEblsWT0W2eBfEAb4J32xqGG3toJ0kaJCoW2CHSjvMSVNyDTjJm++azDECRYxF19YeMSuN1/ut+UKYARuY6rrCvBiMYgV1iCym2PcYkUfkzkKZvlL7+AFtk0tIqaYWmugHWOE6oYCRLgbfIwgsHkjNSBhFqKdjDxEczBsp5LG0Zgd0sVVuOuZ6Yg3ItpA9BWw5rkDr2CMzm1m1vtkGqaXO4XgVc2BO1j7ojYyKLizHq0hVOkbEDpX4j+34RBpxvTLrgVRvvFEtrRRjF7Ejpt7TecquNZZxK9NvaPnAPSB2+cN0ybVoq121TZtm5TNkVd4GvnMpKC5geBG+a50UmVg7bYjVKgGexjLmdtToN0GDr4xsNiLDiQbd+6Us1Gwi2FhIkLv1PjK6ox1dj2DSEyjdGSsRkiQJE1BIlBIlI1AE1UxkksojiEI2QZr7wNvbJkSI2yTGD2KBarl2xLWU8fGJwDtgzREzGoNdZEop4wJSQZOsjsMBiwbDf4zPrOCx4jb133xO7r6LZhwa3nKNStd1YC1+iRwNrxZSHUQ1d9icdT1Af4Yg9yDutp2SpT6bsd3/qNnvllTozdwiXYxGvsB7YJDDVfR8PfBTnn8ikeB02R4JWjwWGjRxI6T+03nBQmK9N/abzgYwow1Nt5mliDsHAaypg6d3vuXXv3Q9dtZXGtNiS6VnbXtlE1LXPWD37vfaWa7f2/KZ1d9G7PxEdgR09GqGAINwRthCZjciXCEa2zE29omamePGVoWSomXkTV6pAmIW4xxRGr1R1aLSOsxiPywDWuL2vlvdrX0OXbaNmJlL/Sk/WTiAOkUyk+AHdaaGsVX7M0lwC4N4wJk6hN4MmZhEWgXeJ3lapUithSFUqTGx9ezhR29txYWP+bppO62JKnxE5xWvUY6+k1gWuRruJkm9lEjZwy6W8f83y44sFUSthraa36h/mks57uTuUR/Qvsaobhv82WgIbL0e0E+MDOfItlIhVOkUYCKINRo4o9N/abzgS0Jiz039pvOV2vHfREaeBXoX4k+A0kcQTbWWcOVKJrY5RoZUxbAEi86YpeJO9mdiW/OUlXO9urXuhMS8ngaWmY7W8pOTodIanj/AJPE0qZHRrAppuYdJW9xHfN85fWv3TiOcBK4jCMDa1dNR1uB+M7h6nFL9h/CbFLoJrhC0Y2i+WQ7cw7RCoU3GdCZLaBgmESEsI1oQNjGMTHtIsZgAqj6wLPFVOsru68YrY6Q9Qyq5jNV4AnyjLVPAScmh0iGJNl137JhutqhPG1u8TYxlyL9czMUBdTv193/AHIt1IdcNHCtYXG3YJaROjbextKeFmhTNtfVHvOyWXBGO/pN1C3hpKd9JbQadspPTBkchSAZTGkQYpEc0cX6b+03nIIhY2AueHGSxhOd/abzjYVMzqCd/HcJT2T9GlWyhQpAXQaX2TLxfR1I09YbJtVEFtvdtHlMfF01UHK4XqsSp7p1VoinsyKrhiAGG3XsmqgAAHDSYqpmcLlUAn0l2eE2dAJCfSq4czzrW9TDAaXqp/Os9Cq073I/6nm/PWsVNFvVfN90g/hPR316QJF9Qe3cYcPWbJxFZ6fGCNM7pdLP1GN8qd6y9E7KyORtlhGvEbHdGQaxloV7KFDE1jiXQovyQUFCB0r6XJO/U7JokcZJGF5IsIEmjOV+ijWp6yu6qJoPtg2wqnfM0FMy3ctoNB5xkokmwF5o1EpoLsbylWxhbooMq9W0yckvY6d8MvlzErTQ78ozNbedgAmVi6hvSuCuYNodoJtp4w/OBSUcKLnJcAGxuDcWmZja5Y0HqFrkEsfrXvp+E55PZaJvYNppZSejw1bt3CZmEOXrY7APOaKJpYnrM6FtEX0OGAvvsLabB3zPrjKSOOvjNJU02WA1udB2yjimDNpuFu2Ty8Hg9ggY8iI05rKmjjagzv7beZhOS2BqDsMHjR9I+n128zJcmG1QbrgiWj8iL4bbntmfik/e7iLzQZesyrXp6bW8Z2eiCOfqUwrg2A17r8YfOOMjiQcwBN9d4F/GOKXVOafS8eHKc+T0U7TPTMMvQVCbkKoJO8gAGeb88FAFInYHF+y4npdcdK4mwrbNk4gJQjYe6OtbcRaGvmF4JkBnQRslk4RKIEArDI8KYGQGhkC8G+LQuaaupqAZigIzAcSJG5m8k+B8Wuj1q1jKVfGHYNsniNvXI0qIXU7TEk2x0kVhRZjdvCEZLCHYys5uYrVBRm48dIdYmBy4eknUCffOh5U0ZR+6T4mc3y6eknsnznFm1Z04ttGtyHi0qKXvYqxRrg6Mu4e6bVPEg+irt3ZR75jclYdmVbqwUKLAabdSdJ0WGwoUek4+1OzGv1Rzz+TEqswuwIH2co9+vfMzEmzmxJvbbNtwbbSfaGbw0mNj3GfZbQbrX7bRc6/UOPpAxRg0U5Cxq409N9npt5mLBuQ69tvGV8f+0fX67eZhOSqV6q9LYCe8S6+RF8N9uz3yviF02CGeqL5QCTwFrDtMHXvbZ751rhA5+semOjbbv0ki8ji3Ga1iDfu7pBlnPk+RePDm+e3SRBxa3jpPTillA4ADw0nmvOigz/JIvpNUVV7WIAnpebwPnNh6zZeICSQbiSYAi4kmWA1U3GydBHo94wWTYXFxIoYQFBeS0FU1gLORZjx0tfwlphCjWDcazKKXAtt9KtbbAloavAO4UdZ2RGOiFV90VBL6nYNT+UVDDljc6DeYq9QHor6I954xf7YTK5TJL5txGndunN8tnpqOCDzM6rlNOgD+8B4gzkuWj0x7C/jOLPqzqwdRvczkb5Bdbks5F76KXaw8J1dMNx995jc3kC0kFxoi8eE3V7jO7GqgjlyO5MG5PV3j8pg45unsGwXtN6re2yc1jW+kPcJLO/1HxLZMxSGbdGnHZc1cco+Uf228zCcmMFcddx3mQx1/lH9tvMwAJnRdOyFaOkw62HWTePW2QfJ9XOubuPbv7paZRwnXF6IPpzONXpi/XIXHCWOVkUOu47uGsrESGX5Fo8ADAtUr0GVejTqB3J0ACg27720nXEjZeZfI9RBdCekTcA7D2TUdZTFGkJJ72JG3GRYSDe8SSPfQ7ZUSgXom42b4jxGyTcWgxp2TGsZW17jIluuUavKlL5Y0A/0gXMVsbWsD6Wy9jsljtg8k+BcWukMS2ogqdME3OsVbbA1ahtlG/aYrYyJ4nE5uguwbTAINwjom4SZfLoNW8oneh/wqcriyKP3rnvE4zls/SH2V8p2mOXoEnqPfecdj1DYkKSLEoDfZbTbOX+QrZ04HR3nI1LLTQDUZV16rCaRXqlLAU1AtcXG2xl/KPWnelSo5G7ZUxNrbB3TmK5PyjA7zcdhFxOsxCKFLEkgA6bJy1V8zluJ8BuHhOT+TxFsPscmKRMU5LL0bWOb6R/bbzMAWPCEx7/SP7beZlct2TpfSBuchvdWHBvMTVInOYDHpTV2c6DLs1JN7AAcdYOry5Uc9EBF3W1bvJ/AS0ZxjFWI8bk9B+W16SnrI90oaxOXfUux1vY6j+0g1TKbMbE+B7DFnJSdodRcVRj8q8vDC4nDM4+jJcVDtyo4y5/smxPVed+raAqwKkAqQbqQdhB4Txjn1is2ICA3yIAepmJYjwyyXM7nlVwhWiymrhybBNM6Fj/8AWSbEXPonTXQiVx6RKR7KX4yDi/bB4XF06ouji9gxU6OARcZlOo2yb6SnReMQqkaEaRaG8A7yKONeyZMzQJsIufPbpW1PHdthyIke9+yJjMkka2V8TtEAxAksS+vdA5orYyHLk6DSOgA6zIgEw1Ogx2LF6MUOVTdB2jQbO+cZitcSBt6SAdulp23L+Kp4bDtUrMBcqiDezsQBYb7bT1AzjRQL4wILauNd1gLn3TnzR/Zf20WwvT/xno2Bw4CgaEDgb68T1yy1htgsNhLAWI8Ap8VhHzDbY+Y7987WchU5VrdDKNLg+AnM3m3yjVvm6lt/njMJjacP8h20dWFUid7xSIbhFOWi1m1jz9K+v128zAAiNyjb5Wp7b/zGVwROhy2QSLDAEWlVNDaT0g6hF9NkVspj06NCg+mkqcvV0Si9R2yqovfffcBxN7WhMNUyg9U8u5584TiamRTakhIA9dxoXPkP7yuNeTBkfiY2K5QZ6r1W2uxYjhfZbsFhNTm3RWriEF+iNWPBfrdhC5j9mc4TD4PHPRbPTbKSCp3gggggg9RPjOlrRzqr2aPK3KztjHqo7IwY5WRirKBuBG699Nk6vkn9JuJpgLXpriF9ZbJUt1gDK3gJ50tTpknfv7dZbRgdhmTo0nbs9l5K5+YPEEDOabn6lSym/AG9jOjpup1BBHVPnd0VvSAPXsPjNDk3lnFYb9hiHtsyP0l99wPdCmLR7qmJAJHUYOpi7meVJz+xV0zoCFTKVUKAx9e+3NfWAr8+8SSctFRfiSfymuwtJHqdetr3QX6yg1Z1UdZ18J5W3ODGVVZjiKdM/VQKb21vc2Njstx6pzuIxVepq9Vz2sf7CLoJ7Hj+e2EofWzsNw/LbOexP6VL3CUXbgCwRftEXYjwnmbKBpthBDZjZx/KtbGVVeswIU9FFGVEGlwi8TvY6z0Tm/RzY5z6oNu02H5zyvCVQGW5sCyAngCwufCejcjcrLRx7F2AQg5jtyjUhtOpT4SbSc0Mm1FnqNEaQGJq2B7IdXXUAgkbQDqL6i42zO5T/ZvqRdSLjbrw65eUtEorZmYiuCCCNSDMxxcQqPaw3WAF+rYJN5505eTOuK8SkdONopYqCPJFC7ykp+VqbPTf+YysEPVNHlDCKarni7H3mA/VRulHdk1wqlD1SFRTbdLD4MHaT4xv1FRx8ZqYU6MDnbyj8jhnKmzvZF7W2nuFzPKAZ236SahD0qe4Bn8SFHkZxE6sKqJLLK2IxjHJkZVkyNo4uNhtEY0xgy4kjaLzV5tolXE0ldc6XZmT18iM+TXiVExLyJPA+EDQEejmjQ/8OgP/AMj+DyP6rQ/8Wl3I48nnm9zxMfO3rHxMTxf2P5L6PR62HwqozNhVFlY5gaqgaHX0pwCnTXvjfrrZctl2WuV6XbfjK95oproG0wtRxeMavASzyTglquUZ8nQZgcpa7LY5bA7xfXqk+V+TTQqFDcqVV1ZgFLKw22BNtQw+zDq6NWrKW3bOv5m2qVAXe+Vkzqdppra2UfWuVCkE2szbbzkQJa5PxrUXV13HUbmU7VMLWtBjV7PY8TjQ7FxYXObJdFZdBlU5B0WAyKSCdAI6Ymrl/au6FwhV8rKCTcBHtmuBc7ZytXlHMFqU2IJAII2keqeO/bN3k2uKoDjNkHSAb1iACe3SQeS0yrx+NfRplL6GJmifZISASWaKQY74pqGOlxg6b+23nK7LCY0n5R9vpN5mVyTHfRFwnljZYLKYrGBGZ5x+lKlavRbc1Nh919f5hOFM9O/STgmaglW37N7N1K9h/MFnmJnVjf6kZdINFeORImVFYoo0RMARGMRFeK8DMNaMY4jGBmFFaKK01GLPJuL+SqLUCq2W9gwutyCL91790Pytym1dlZgoyoEWwGzbYnfqTbgDM8xCCthsneNGihsB1HNV8ylTqEa/cdZ6HhmuLicLzJo9Cox+swA7h+ZnZcnPoQZxz+TOmLuKNEGQYESYaQqPsgAMzRSN9bRRBjpcav0j+23nAHsl11zMWO0k374v1cdc6HjdkkyiW6o4lz9XHXF+qjifdD+NmtGHzioB8LXS22m9u0DMD4gTwsz6Lr4NWVlJNmUqdmwix3dc5L5s8H69f76fBKwTXRJOzx6NPYvmywfr4j76f04vmxwfr4j76f05QU8bivPZPmvwXr4j76f04vmvwXr4j76f05jUeNGNPZvmvwXr4j76f05H5r8F62I/iJ8EBqPGxGnsw/RfgvXxH30/pxvmvwXrYj+InwTUY8ajz2T5r8F62I/iJ8EXzYYL18R/ET4JjHjUU9l+a/BetiP4ifBF81+C9bEfxE+CYJ41HnsnzX4L1sR/ET4IvmuwXr4j+InwQUYwubmHyYdBvIzHtY3/ACm1RNjfsnRLzaoiwBqWAsOkvww3+3qVrZn8V+GczxybsspJKjGDSNSbyciIB6T+I/KL/RqfFvEflN+KRvNHOlopv/6JTvtfxX4YoPwyD5o//9k="
                />
                <div>
                  <p>School T-Shirt</p>
                  <p>price 200rs</p>
                  <p style={{ color: "#c70039" }}>
                    <b>
                      <i className="fa fa-trash"></i>
                    </b>
                  </p>
                </div>
              </td>
              <td>3</td>
              <td>4500</td>
            </tr>
          </tbody>
        </table>
        <Card.Body></Card.Body>
        <Card.Footer className="d-flex">
          <small className="text-muted" style={{ flex: "1" }}>
            Total Amount
          </small>
          <h5>4500</h5>
        </Card.Footer>
      </Card>
      <div className="d-flex">
        <button
          type="submit"
          className={Styles.back__button}
          onClick={() => history.push("/")}
        >
          Back to cart
        </button>
        <button type="submit" className={Styles.checkout__button}>
          Proceed To chekout
        </button>
      </div>
    </Card>
  );
}

export default Cart;
