<div class="modal" id="donate">
    <div class="modal__dialog">
        <button class="modal__close" data-close>
            <img src="{{ asset("images/icons/close-cross.svg")}}" height="15" alt="">
        </button>        
        <form class="" action="" method="post">
            <div role="main" class="form-all">
            <style>
                .form-all:before { background: none;}
            </style>
            <ul class="form-section page-section">
                <li id="cid_28" class="form-input-wide">
                <div class="form-header-group  header-large">
                    <div class="header-text httal htvam">
                    <h1 id="header_28" class="form-header">
                        Donation Form
                    </h1>
                    <div class="anonimously">
                        <img src="{{ asset("images/charity/anonym.png") }}" alt="" height="60">
                        <h2>Completely anonimously</h2>
                    </div>
                    </div>
                </div>
                </li>
                <!-- <li class="form-line jf-required"id="id_29">
                <label class="form-label form-label-top" id="label_29" for="first_29">
                    Full Name
                    <span class="form-required">
                    *
                    </span>
                </label>
                <div id="cid_29" class="form-input-wide jf-required">
                    <div data-wrapper-react="true">
                    <span class="form-sub-label-container" style="vertical-align:top">
                        <input type="text" id="first_29" name="q29_fullName[first]" class="form-textbox validate[required]" size="10" value="" required=""/>
                        <label class="form-sub-label" for="first_29" id="sublabel_29_first" style="min-height:13px"> First Name </label>
                    </span>
                    <span class="form-sub-label-container" style="vertical-align:top">
                        <input type="text" id="last_29" name="q29_fullName[last]" class="form-textbox validate[required]"size="15" value="" required=""/>
                        <label class="form-sub-label" for="last_29" id="sublabel_29_last" style="min-height:13px" aria-hidden="false"> Last Name </label>
                    </span>
                    </div>
                </div>
                </li>
                <li class="form-line jf-required" id="id_30">
                <label class="form-label form-label-top" id="label_30" for="input_30">
                    E-mail
                    <span class="form-required">
                    *
                    </span>
                </label>
                <div id="cid_30" class="form-input-wide jf-required">
                    <span class="form-sub-label-container" style="vertical-align:top">
                    <input type="email" id="input_30" name="q30_email" class="form-textbox validate[required, Email]" style="width:310px" size="310" value="" placeholder="ex: myname@example.com" required="" />
                    <label class="form-sub-label" for="input_30" id="sublabel_input_30" style="min-height:13px"> example@example.com </label>
                    </span>
                </div>
                </li> -->
                <li class="form-line jf-required" data-type="control_paypalcomplete" id="id_37">
                <label class="form-label form-label-top" id="label_37" for="input_37">
                    Donation Amount
                    <span class="form-required">
                    *
                    </span>
                </label>
                <div id="cid_37" class="form-input-wide jf-required">
                    <input type="hidden" name="simple_fpc" data-payment_type="paypalcomplete" value="37" />
                    <input type="hidden" name="payment_total_checksum" id="payment_total_checksum" />
                    <span class="form-sub-label-container" style="vertical-align: top;">
                    <div class="wrapper">
                        <form class="form-inline">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon currency-symbol">$</div>
                            <input type="text" class="form-control currency-amount" id="inlineFormInputGroup" placeholder="0.00" size="8" required="">
                            <div class="input-group-addon currency-addon">
                            <select class="currency-selector" name="currency-selector">
                                <option data-symbol="₴" data-placeholder="0.00" selected>UAH</option>
                                <option data-symbol="$" data-placeholder="0.00">USD</option>
                                <option data-symbol="€" data-placeholder="0.00">EUR</option>
                                <option data-symbol="¥" data-placeholder="0.00">CNY</option>
                                <option data-symbol="£" data-placeholder="0.00">GBP</option>
                                <option data-symbol="₣" data-placeholder="0.00">CHF</option>
                                <option data-symbol="₹" data-placeholder="0.00">INR</option>
                            </select>
                            <label for="currency-selector">        
                                <img src="public/images/icons/arrow.svg" alt="">
                            </label>
                            </div>
                        </div>
                        </form>
                    </div>
                    <label class="form-sub-label" for="input_37_donation" style="min-height: 13px;"> Please enter your donation amount </label>
                    </span>
                </div>
                </li>
                <li class="form-line" id="id_38">
                <label class="form-label form-label-top" id="label_38" for="input_38"> Payment Methods </label>
                <div id="cid_38" class="form-input-wide">
                    <div class="payment-methods-area">
                    <div class="paypalcomplete-payment-wrapper">
                        <div id="commerce-platform-container">
                        <div class="toggle-buttons">
                            <div class="toggle">
                            <div id="card-fields">
                                <div class="payment-method-container">
                                <input type="radio" class="form-radio" name="payment-method" data-id="card-fields" id="card-fields-input" aria-describedby="label_38" />
                                <label for="card-fields-input">
                                    Debit or Credit Card
                                </label>
                                </div>
                                <div class="payment-method-container">
                                <input type="radio" class="form-radio" name="payment-method" data-id="btc-fields" id="btc-fields-input" aria-describedby="label_39" />
                                <label for="btc-fields-input">
                                    BTC Wallet
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <!-- <div class="toggle-content " render-type="">
                            <div class="content-area">
                            <div id="credit-card-fields">
                                <div class="commerce-platform">
                                <div class="content">
                                    <table class="form-address-table payment-form-table" style="border:0" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                        <td width="50%">
                                            <span class="form-sub-label-container" style="vertical-align:top">
                                            <input type="text" id="input_37_cc_firstName" name="q37_donationAmount[cc_firstName]" class="form-textbox validate[required] cc_firstName" data-defaultvalue="" size="20" value="" data-component="cc_firstName" />
                                            <label class="form-sub-label" for="input_37_cc_firstName" id="sublabel_cc_firstName" style="min-height:13px;margin:0 0 3px 0" aria-hidden="false"> First Name </label>
                                            </span>
                                        </td>
                                        <td width="50%">
                                            <span class="form-sub-label-container" style="vertical-align:top">
                                            <input type="text" id="input_37_cc_lastName" name="q37_donationAmount[cc_lastName]" class="form-textbox validate[required] cc_lastName" data-defaultvalue="" size="20" value="" data-component="cc_lastName" />
                                            <label class="form-sub-label" for="input_37_cc_lastName" id="sublabel_cc_lastName" style="min-height:13px;margin:0 0 3px 0" aria-hidden="false"> Last Name </label>
                                            </span>
                                        </td>
                                        </tr>
                                        <tr class="if_cc_field">
                                        <td width="50%">
                                            <span class="form-sub-label-container" style="vertical-align:top">
                                            <div class="form-textbox cc_numberMount ">
                                            </div>
                                            <label class="form-sub-label" for="input_37_cc_number" id="sublabel_cc_number" style="min-height:13px;margin:0 0 3px 0" aria-hidden="false"> Credit Card Number </label>
                                            </span>
                                        </td>
                                        <td width="50%">
                                            <span class="form-sub-label-container" style="vertical-align:top">
                                            <div class="form-textbox cc_ccvMount ">
                                            </div>
                                            <label class="form-sub-label" for="input_37_cc_ccv" id="sublabel_cc_ccv" style="min-height:13px;margin:0 0 3px 0" aria-hidden="false"> Security Code </label>
                                            </span>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td width="50%">
                                            <span class="form-sub-label-container" style="vertical-align:top">
                                            <div class="form-textbox cc_cardExpiryMount ">
                                            </div>
                                            <label class="form-sub-label" for="input_37_cc_card_expiry" id="sublabel_cc_card_expiry" style="min-height:13px;margin:0 0 3px 0" aria-hidden="false"> Card Expiration </label>
                                            </span>
                                        </td>
                                        <td width="50%">
                                            <tr style="display:none">
                                            <td>
                                                <input id="paypal_complete_dummy" style="display:none" />
                                            </td>
                                            </tr>
                                        </td>
                                        </tr>
                                        <div id="payments-sdk__contingency-lightbox">
                                        </div>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            <div id="spb-area">
                                <p>Please click one of the PayPal options to complete payment and <b>submit</b> the form.</p>
                                <div id="button-container">
                                </div>
                            </div>
                            </div>
                        </div> -->
                        </div>
                    </div>
                    <input type="hidden" id="input_38_payment_method" name="q38_paymentMethods[payment_method]" class=""/>
                    </div>
                </div>
                </li>

                <li class="form-line jf-required" data-type="control_textarea" id="id_33">
                <label class="form-label form-label-top form-label-auto" id="label_33" for="input_33">
                    Comments
                    <span class="form-required">
                    *
                    </span>
                </label>
                <div id="cid_33" class="form-input-wide jf-required">
                    <textarea id="input_33" class="form-textarea validate[required]" name="q33_comments33" style="width:648px;height:163px" required=""></textarea>
                </div>
                </li>
                <li class="form-line" id="id_14">
                <div id="cid_14" class="form-input-wide">
                    <div data-align="center" class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField">
                    <button id="input_14" type="submit" class="form-submit-button form-submit-button-simple_black submit-button jf-form-buttons jsTest-submitField">
                        SUBMIT
                    </button>
                    </div>
                </div>
                </li>
            </ul>
            </div>
        </form>
    </div>