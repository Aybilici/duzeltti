import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./App";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Contact from "./iletisim";
import Form1 from "./form1";
import kosullar from "./kosullar";
import "./App.css";
import "./css/util.css";
import "./css/mainf2.css";
import Background from "./isaret.jpg";

var imagesection = {
  backgroundImage: `url(${Background})`
};

const StyledButton = withStyles({
  root: {
    background: "orange",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 35,
    padding: "0 30px",
    fontWeight: "bold",
    margin: "0px 15px 10px 15px"
  }
})(Button);
export default function form2() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form1} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/kosullar" component={kosullar} />
        <Route>
          <div className="App3">
            <div className="menu">
              <Link to={"/"}>
                <button className="butlar">Geri dön</button>
              </Link>
              <Link to={"/form"}>
                <button className="butlar">1.Gruba katıl!</button>
              </Link>
            </div>
            <div className="container-contact100">
              <div className="wrap-contact100">
                <div
                  className="contact100-more flex-col-c-m"
                  style={imagesection}
                >
                  <div className="dis-flex size1 p-b-47">
                    <div className="flex-col size2">
                      <span className="txt1 p-b-20">
                        2.Grup (Tanışma ve Proje Geliştirme Eğitimleri)
                      </span>

                      <span className="txt3">
                        Formu doldurmadan önce eğitim ile ilgili şunları
                        bilmenin iyi olacağını düşünüyoruz:
                        <br />
                        <br />
                        <ol>
                          <li>
                            1. Bu eğitim ve proje geliştirme grubuna yalnızca
                            üniversite öğrencilerinin başvurusu alınacaktır. Bu
                            nedenle formu doldururken öğrenci belgesi
                            niteliğinde bir belge yüklemek şarttır
                            (İstanbulKart, öğrenci kimlik kartı, öğrenci belgesi
                            gibi).
                          </li>
                          <br />
                          <li>2. Katılım ücretsizdir.</li>
                          <br />
                          <li>
                            3. Eğitimler …………….. tarihleri arasında cumartesi
                            günleri gerçekleşecektir. Her bir eğitim 3 saat, 8
                            cumartesi, toplam 24 saattir.
                          </li>
                          <br />
                          <li>
                            4. 8 buluşmadan en az 7&#39;sine katılım zorunludur.
                          </li>
                          <br />
                          <li>
                            5. Grup 12 üniversite öğrencisinden oluşacak ve bu
                            grupta yer alabilmek için Türk İşaret Dili, sağır
                            toplum ve işitme engelliler ile ilgili
                            geliştirilebilir bir proje fikrinin olması
                            gerekmektedir.
                          </li>
                          <br />
                          <li>
                            6. Başvurular Dem Derneği koordinatörleri ve
                            danışmanları tarafından değerlendirilecektir.
                          </li>
                          <br />
                          <li>
                            7. Değerlendirme sonuçları …………….. günü e-posta
                            yoluyla bildirilecektir.
                          </li>
                          <br />
                          <li>
                            8. Eğitimler ……’ten ……’e Dem Derneği’nin Tomtom Mah.
                            Yeniçarşı Cad. No: 68/21 Beyoğlu/İstanbul adresinde
                            bulunan merkez ofisinde gerçekleştirilecektir.
                          </li>
                          <br />
                          <li>
                            9. Formla ilgili sorularınız için Dem Derneği’nden
                            destek alabilirsiniz. (e-posta:
                            diclesonmezoglu@demdernek.org)
                          </li>
                          <br />
                        </ol>
                        <br />
                        Şimdiden tanışmak için pek heyecanlıyız, Dem&#39;den
                        Kocaman Sevgilerle :)
                      </span>
                    </div>
                  </div>
                </div>
                <form className="contact100-form validate-form">
                  <span className="contact100-form-title">
                    Tanışma ve Proje Geliştirme Eğitimleri
                  </span>

                  <label className="label-input100" htmlFor="isim">
                    İsİm ve SoyİSİm *
                  </label>
                  <div
                    className="wrap-input100 rs1-wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <input
                      id="isim"
                      className="input100"
                      type="text"
                      name="isim"
                      placeholder="İsim"
                    />
                    <span className="focus-input100" />
                  </div>
                  <div
                    className="wrap-input100 rs2-wrap-input100 validate-input"
                    data-validate="Type last name"
                  >
                    <input
                      id="soyisim"
                      className="input100"
                      type="text"
                      name="soyisim"
                      placeholder="Soyisim"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="email">
                    E-Posta *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      id="email"
                      className="input100"
                      type="email"
                      name="email"
                      placeholder="ornek@email.com"
                      required
                    />
                    <span className="focus-input100" />
                  </div>

                  <label className="label-input100" htmlFor="phone">
                    Telefon nuramanız *
                  </label>
                  <div className="wrap-input100">
                    <input
                      id="phone"
                      className="input100"
                      type="tel"
                      name="phone"
                      placeholder="Örnek Numara : 0523 434 43 54"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="soru1">
                    Okul *
                  </label>
                  <div
                    className="wrap-input100 wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <input
                      id="soru1"
                      className="input100"
                      type="text"
                      name="soru1"
                      placeholder="Yazınız"
                      required
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="soru2">
                    Bölüm *
                  </label>
                  <div
                    className="wrap-input100 wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <input
                      id="soru2"
                      className="input100"
                      type="text"
                      name="soru2"
                      placeholder="Yazınız"
                      maxLength="250"
                      required
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="date">
                    Beklenen mezunİyet yılı *
                  </label>
                  <div className="wrap-input100">
                    <input
                      id="date"
                      className="input100"
                      type="month"
                      name="date"
                      required
                    />
                  </div>
                  <label className="label-input100" htmlFor="image">
                    Öğrencİ Belgesİ *
                  </label>
                  <div className="wrap-input100">
                    <UploadPreview />
                  </div>
                  <label className="label-input100" htmlFor="sec1">
                    Daha önce TİD EĞİTİMİ aldın mı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <select required className="input100" id="sec1" name="sec1">
                      <option value="">Seç</option>
                      <option value="120">Evet, İSMEK (120 saat)</option>
                      <option value="200">Evet, İSMEK (200 saat)</option>
                      <option value="halk">Evet, Halk Eğitim Merkezi</option>
                      <option value="özel">Evet, özel bir kurs</option>
                      <option value="hayır">Hayır</option>
                      <option value="diger" htmlFor="diger">
                        Diğer
                      </option>
                    </select>

                    <input
                      id="diger"
                      className="input100"
                      type="diger"
                      name="diger"
                      placeholder="Diğer varsa yaz"
                    />
                  </div>
                  <label className="label-input100" htmlFor="soru3">
                    Neden TİD öğrenmek İstİyorsun? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <input
                      id="soru3"
                      className="input100"
                      name="soru3"
                      type="text"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="soru4">
                    EğİTİm sonrasında gerçekleştİrmek İstedİğİn bİr fİkrİn var
                    mı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <input
                      id="soru4"
                      type="text"
                      className="input100"
                      name="soru4"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="sec3">
                    Dem DerneğİNİ nereden duydun? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <select
                      required
                      className="input100"
                      id="sec3"
                      type="sec3"
                      name="sec3"
                    >
                      <option value="">Seç</option>
                      <option value="arkadas">Arkadaş çevresi</option>
                      <option value="face">Facebook</option>
                      <option value="insta">Instagram</option>
                      <option value="arama">Arama Motoru</option>
                      <option value="diger">Diğer</option>
                    </select>

                    <input
                      id="diger1"
                      className="input100"
                      type="diger1"
                      name="diger1"
                      placeholder="Diğer varsa yaz"
                    />
                  </div>
                  <label className="label-input100" htmlFor="sec2">
                    Aİlende ve/veya yakın çevrende sağır ve/veya İŞİtme engellİ
                    var mı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Type first name"
                    style={{ marginBottom: "15px" }}
                  >
                    <select
                      required
                      className="input100"
                      id="sec2"
                      type="sec2"
                      name="sec2"
                    >
                      <option value="">Seç</option>
                      <option value="var">Var</option>
                      <option value="yok">Yok</option>
                    </select>
                  </div>
                  <label
                    className="label-input100"
                    style={{ borderBottom: "1px solid" }}
                  >
                    Proje fİkrİ İle İlgİlİ detay:
                  </label>
                  <label className="label-input100" htmlFor="soru5">
                    Bu fİkİr nasıl ortaya çıktı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <input
                      id="soru5"
                      className="input100"
                      name="soru5"
                      type="text"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="soru6">
                    Fİkİrden kİmler etkİlenecek? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <input
                      id="soru6"
                      type="text"
                      className="input100"
                      name="soru6"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="soru7">
                    Fİkrİnİ gerçekleştİrmek İçİn atacağın 3 temel adım nelerdİr?
                    *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <input
                      id="soru7"
                      className="input100"
                      name="soru7"
                      type="text"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="soru8">
                    Bİze söylemek İstedİğİn bİr şey var mı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                    style={{ marginBottom: "15px" }}
                  >
                    <input
                      id="soru8"
                      type="text"
                      className="input100"
                      name="soru8"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label htmlFor="checkbox_id" className="label-input101">
                    <input
                      type="checkbox"
                      title="Kabul ediyorum"
                      id="checkbox_id"
                      style={{
                        maxwidth: "35px",
                        maxheight: "35px",
                        margin: "10px 10px 10px 0px",
                        backgroundColor: "orange"
                      }}
                      required
                    />
                    KVKK bilgilendirme metni okudum, kabul ediyorum.
                    <Link
                      to="/kosullar"
                      target="_blank"
                      style={{ margin: "5px" }}
                    >
                      "KVKK"
                    </Link>
                  </label>
                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn">Gönder</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="email">
              <Link to={"/contact"}>
                <button className="iletisim">
                  <span className="mail">SORUN VARSA BİZE ULAŞIN!</span>
                </button>
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
        <div style={{ float: "left" }}>
          <input
            type="file"
            onChange={this.onChange}
            accept="image/*"
            name="contained-button-file"
            id="contained-button-file"
            required
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            <StyledButton
              variant="contained"
              component="span"
              className="styl"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            >
              Yükle
            </StyledButton>
          </label>

          {this.state.file && (
            <div>
              <StyledButton
                onClick={this.resetFile}
                component="span"
                variant="contained"
              >
                Kaldır
              </StyledButton>
            </div>
          )}
        </div>
        <img className="cassa" src={this.state.file} alt="" />
      </div>
    );
  }
}
