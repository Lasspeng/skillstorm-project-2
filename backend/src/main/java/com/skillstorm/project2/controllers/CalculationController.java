package com.skillstorm.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.models.TaxResults;
import com.skillstorm.project2.models.Account.FilingStatus;
import com.skillstorm.project2.models.Account.Role;
import com.skillstorm.project2.services.AccountService;

@RestController
@CrossOrigin("*")
public class CalculationController {
    // This controller class is solely for creating the api endpoint that calculates how much the user owes in tax

    @Autowired
    AccountService acctService;

    // Calculate how much tax is owed by the user
    @GetMapping("/calculate/{id}")
    public ResponseEntity<?> calculateTaxes(@PathVariable int id) {

        TaxResults taxResults = new TaxResults();

        // Get the user's account information 
        // Account acct = acctService.findAccountById(id);
        // double w2Income = acct.getFormW2().getWages();
        // double w2Withheld = acct.getFormW2().getTaxWithheld();
        // double f1099Income = acct.getForm1099().getWages();
        // double f1099WriteOffs = acct.getForm1099().getTaxWriteOffs();
        
        Account acct = new Account(null, Role.ROLE_USER, null, null , null, null, FilingStatus.SINGLE, null, null, null, null, null, null, null, null);
        double w2Income = 50000;
        double w2Withheld = 6785;
        double f1099Income = 23000;
        double f1099WriteOffs = 7000;

        // Calculate the user's taxable income. Is still missing the standard deduction
        double taxableIncome = w2Income + f1099Income - f1099WriteOffs;
        
        switch (acct.getFilingStatus()) {

            case SINGLE:
                double standardDeductionSingle = 13850;
                taxableIncome -= standardDeductionSingle;

                // All possible tax brackets
                if (taxableIncome <= 0) {
                    taxResults.setTaxesOwed(0);

                } else if (taxableIncome > 0 && taxableIncome <= 11000) {
                    taxResults.setTaxesOwed(taxableIncome * .10);

                } else if (taxableIncome > 11000 && taxableIncome <= 44725) {
                    taxResults.setTaxesOwed(((taxableIncome - 11000) * .12) + 1100);

                } else if (taxableIncome > 44725 && taxableIncome <= 95375) {
                    taxResults.setTaxesOwed(((taxableIncome - 44725) * .22) + 5147);

                } else if (taxableIncome > 95375 && taxableIncome <= 182100) {
                    taxResults.setTaxesOwed(((taxableIncome - 95375) * .24) + 16290);

                } else if (taxableIncome > 182100 && taxableIncome <= 231250) {
                    taxResults.setTaxesOwed(((taxableIncome - 182100) * .32) + 37104);

                } else if (taxableIncome > 231250 && taxableIncome <= 578125) {
                    taxResults.setTaxesOwed(((taxableIncome - 231250) * .35) + 52832);

                } else if (taxableIncome > 578125) {
                    taxResults.setTaxesOwed(((taxableIncome - 578125) * .37) + 174238.25);
                }
                break;


            case MARRIED:
                double standardDeductionMarried = 27700;
                taxableIncome -= standardDeductionMarried;

                if (taxableIncome <= 0) {
                    taxResults.setTaxesOwed(0);
 
                } else if (taxableIncome > 0 && taxableIncome <= 22000) {
                    taxResults.setTaxesOwed(taxableIncome * .10);

                } else if (taxableIncome > 22000 && taxableIncome <= 89450) {
                    taxResults.setTaxesOwed(((taxableIncome - 22000) * .12) + 2200);

                } else if (taxableIncome > 89450 && taxableIncome <= 190750) {
                    taxResults.setTaxesOwed(((taxableIncome - 89450) * .22) + 10294);

                } else if (taxableIncome > 190750 && taxableIncome <= 364200) {
                    taxResults.setTaxesOwed(((taxableIncome - 190750) * .24) + 32580);

                } else if (taxableIncome > 364200 && taxableIncome <= 462500) {
                    taxResults.setTaxesOwed(((taxableIncome - 364200) * .32) + 74208);

                } else if (taxableIncome > 462500 && taxableIncome <= 693750) {
                    taxResults.setTaxesOwed(((taxableIncome - 462500) * .35) + 105664);

                } else if (taxableIncome > 693750) {
                    taxResults.setTaxesOwed(((taxableIncome - 63750) * .37) + 186601.50);
                }
                break;
        }
        // Subtract taxes withheld from taxes owed to get the total amount of money needed
        taxResults.setTaxesOwed(taxResults.getTaxesOwed() - w2Withheld);

        return new ResponseEntity<>(taxResults, HttpStatus.OK);
    }
}
