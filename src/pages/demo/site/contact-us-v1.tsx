// react
import React from 'react';
// application
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockMap from '~/components/blocks/BlockMap';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
// data
import theme from '~/data/theme';
import { FormattedMessage, useIntl } from 'react-intl';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>Contact Us</PageTitle>

            {/**   <BlockMap />*/}

            <BlockHeader
                pageTitle="Contact Us"
                breadcrumb={[
                    { title: 'Home', url: '' },

                ]}
                afterHeader={false}
            />

            <div className="block">
                <div className="container container--max--lg">
                    <div className="card">
                        <div className="card-body card-body--padding--2">
                            <div className="row">
                                <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <div className="mr-1">
                                        <h4 className="contact-us__header card-title">Our Address</h4>

                                        <div className="contact-us__address">
                                            <p>
                                                715 Fake Ave, Apt. 34, New York, NY 10021 USA
                                                <br />
                                                {`Email: ${theme.contacts.email[0]}`}
                                                <br />
                                                Phone Number: +1 754 000-00-00
                                            </p>

                                            <p>
                                                <strong>Opening Hours</strong>
                                                <br />
                                                Monday to Friday: 8am-8pm
                                                <br />
                                                Saturday: 8am-6pm
                                                <br />
                                                Sunday: 10am-4pm
                                            </p>

                                            <p>

                                                <strong>Comment</strong>
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                                suscipit suscipit mi, non
                                                tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="ml-1">
                                        <h4 className="contact-us__header card-title">Solicitud de registro</h4>

                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Nombre</label>
                                                    <input
                                                        type="text"
                                                        id="form-name"
                                                        className="form-control"
                                                        placeholder="Nombre"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Apellido</label>
                                                    <input
                                                        type="text"
                                                        id="form-name"
                                                        className="form-control"
                                                        placeholder="Apellido"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="form-subject">Compañia</label>
                                                    <input
                                                        type="text"
                                                        id="form-subject"
                                                        className="form-control"
                                                        placeholder="Compañia"
                                                    />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Direccion</label>
                                                    <input
                                                        type="text"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Direccion"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Ciudad</label>
                                                    <input
                                                        type="text"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Ciudad"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Pais</label>
                                                    <input
                                                        type="text"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Pais"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Codigo Postal</label>
                                                    <input
                                                        type="text"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Codigo Postal"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Telefono</label>
                                                    <input
                                                        type="text"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Telefono"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Email</label>
                                                    <input
                                                        type="text"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Federal Tax ID Number (EIN):</label>
                                                    <input
                                                        type="text"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder=" Number (EIN):"
                                                    />
                                                </div>

                                            </div>
                                            <h4 className="contact-us__header card-title">Háblanos de tu compañía</h4>

                                            <div className="form-group">
                                                <label htmlFor="form-subject"><b>Es tu compañía:</b></label>

                                                <div style={{ gap: '5px', display: 'flex', flexDirection: 'column' }}>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label> Taller </label>
                                                        <input type="radio" value="valueOne" />

                                                    </div>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label>  Taller y venta de repuestos </label>
                                                        <input type="radio" value="valueOne" />

                                                    </div>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label> Distribuidor </label>
                                                        <input type="radio" value="valueOne" />

                                                    </div>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label>  Venta de repuestos nacional </label>
                                                        <input type="radio" value="valueOne" />

                                                    </div>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label>  Tienda en Línea </label>
                                                        <input type="radio" value="valueOne" />

                                                    </div>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label> Fabricante </label>
                                                        <input type="radio" value="valueOne" />
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject"> <b> Se especializa en:</b> </label>
                                                <div style={{ gap: '5px', display: 'flex', flexDirection: 'column' }}>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label> Aire Acondicionado Automotriz </label>
                                                        <input type="checkbox" value="valueOne" />

                                                    </div>

                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label> Aire Acondicionado para camiones </label>
                                                        <input type="checkbox" value="valueOne" />

                                                    </div>
                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <label> Aire Acondicionado Agricultura </label>
                                                        <input type="checkbox" value="valueOne" />

                                                    </div>

                                                    <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                        <input
                                                            type="text"
                                                            id="form-email"
                                                            className="form-control"
                                                            placeholder="otros especifique"
                                                        />

                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="form-subject">Compras anuales de producto para aire acondicionado automotriz y radiador (US Dollars):</label>
                                                    <input
                                                        type="number"
                                                        id="form-subject"
                                                        className="form-control"
                                                        placeholder="monto"
                                                    />
                                                </div>


                                            </div>

                                            <h4 className="contact-us__header card-title">Productos principales que compra:</h4>
                                            <div className="form-group">

                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Evaporadores</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label>Condensadores </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Condensadores </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Condensadores </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label>Charge Air Coolers </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Oil Coolers</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Oil Coolers </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label>Expansion Valves </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Hoses Assemblies </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Compressors </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Compressor parts </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Receiver Driers </label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Fittings</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Cabin Filters</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>


                                            </div>

                                            <h4 className="contact-us__header card-title">Prefiero comprar productos:</h4>

                                            <div className="form-group">
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Hecho en USA</label>
                                                    <input type="radio" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label>  Hecho en China</label>
                                                    <input type="radio" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> No importa, el precio es más importante.</label>
                                                    <input type="radio" value="valueOne" />

                                                </div>

                                            </div>
                                            <h4 className="contact-us__header card-title">Como escucho sobre nosotros?</h4>
                                            <div className="form-group">
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Busqueda por internet</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label>Trade show</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Amigo</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> He usado sus productos anteriormente</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Trade publication</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                                <div style={{ gap: '5px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                                                    <label> Otros</label>
                                                    <input type="checkbox" value="valueOne" />

                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject"></label>

                                            </div>


                                            <div className="form-group">
                                                <label htmlFor="form-message">Message</label>
                                                <textarea
                                                    id="form-message"
                                                    className="form-control"
                                                    rows={4}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlockMap />
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
