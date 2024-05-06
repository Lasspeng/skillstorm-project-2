package com.skillstorm.project2.dtos;

import java.time.LocalDate;
import java.util.Objects;

import com.skillstorm.project2.models.Account.FilingStatus;
import com.skillstorm.project2.models.Account.Role;
import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.models.FormW2;

public class AccountDto {
    
    private Integer id;
    private Role role;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private FilingStatus filingStatus;
    private Integer socialSecurity;
    private String streetAddress;
    private String city;
    private String state;
    private Integer zipCode;
    private LocalDate dateOfBirth;
    private FormW2 formW2;
    private Form1099 form1099;


    public AccountDto() {
    }

    public AccountDto(Integer id, Role role, String email, String password, String firstName, String lastName, FilingStatus filingStatus, Integer socialSecurity, String streetAddress, String city, String state, Integer zipCode, LocalDate dateOfBirth, FormW2 formW2, Form1099 form1099) {
        this.id = id;
        this.role = role;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.filingStatus = filingStatus;
        this.socialSecurity = socialSecurity;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.dateOfBirth = dateOfBirth;
        this.formW2 = formW2;
        this.form1099 = form1099;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Role getRole() {
        return this.role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public FilingStatus getFilingStatus() {
        return this.filingStatus;
    }

    public void setFilingStatus(FilingStatus filingStatus) {
        this.filingStatus = filingStatus;
    }

    public Integer getSocialSecurity() {
        return this.socialSecurity;
    }

    public void setSocialSecurity(Integer socialSecurity) {
        this.socialSecurity = socialSecurity;
    }

    public String getStreetAddress() {
        return this.streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Integer getZipCode() {
        return this.zipCode;
    }

    public void setZipCode(Integer zipCode) {
        this.zipCode = zipCode;
    }

    public LocalDate getDateOfBirth() {
        return this.dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public FormW2 getFormW2() {
        return this.formW2;
    }

    public void setFormW2(FormW2 formW2) {
        this.formW2 = formW2;
    }

    public Form1099 getForm1099() {
        return this.form1099;
    }

    public void setForm1099(Form1099 form1099) {
        this.form1099 = form1099;
    }

    public AccountDto id(Integer id) {
        setId(id);
        return this;
    }

    public AccountDto role(Role role) {
        setRole(role);
        return this;
    }

    public AccountDto email(String email) {
        setEmail(email);
        return this;
    }

    public AccountDto password(String password) {
        setPassword(password);
        return this;
    }

    public AccountDto firstName(String firstName) {
        setFirstName(firstName);
        return this;
    }

    public AccountDto lastName(String lastName) {
        setLastName(lastName);
        return this;
    }

    public AccountDto filingStatus(FilingStatus filingStatus) {
        setFilingStatus(filingStatus);
        return this;
    }

    public AccountDto socialSecurity(Integer socialSecurity) {
        setSocialSecurity(socialSecurity);
        return this;
    }

    public AccountDto streetAddress(String streetAddress) {
        setStreetAddress(streetAddress);
        return this;
    }

    public AccountDto city(String city) {
        setCity(city);
        return this;
    }

    public AccountDto state(String state) {
        setState(state);
        return this;
    }

    public AccountDto zipCode(Integer zipCode) {
        setZipCode(zipCode);
        return this;
    }

    public AccountDto dateOfBirth(LocalDate dateOfBirth) {
        setDateOfBirth(dateOfBirth);
        return this;
    }

    public AccountDto formW2(FormW2 formW2) {
        setFormW2(formW2);
        return this;
    }

    public AccountDto form1099(Form1099 form1099) {
        setForm1099(form1099);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof AccountDto)) {
            return false;
        }
        AccountDto accountDto = (AccountDto) o;
        return Objects.equals(id, accountDto.id) && Objects.equals(role, accountDto.role) && Objects.equals(email, accountDto.email) && Objects.equals(password, accountDto.password) && Objects.equals(firstName, accountDto.firstName) && Objects.equals(lastName, accountDto.lastName) && Objects.equals(filingStatus, accountDto.filingStatus) && Objects.equals(socialSecurity, accountDto.socialSecurity) && Objects.equals(streetAddress, accountDto.streetAddress) && Objects.equals(city, accountDto.city) && Objects.equals(state, accountDto.state) && Objects.equals(zipCode, accountDto.zipCode) && Objects.equals(dateOfBirth, accountDto.dateOfBirth) && Objects.equals(formW2, accountDto.formW2) && Objects.equals(form1099, accountDto.form1099);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, role, email, password, firstName, lastName, filingStatus, socialSecurity, streetAddress, city, state, zipCode, dateOfBirth, formW2, form1099);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", role='" + getRole() + "'" +
            ", email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            ", firstName='" + getFirstName() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", filingStatus='" + getFilingStatus() + "'" +
            ", socialSecurity='" + getSocialSecurity() + "'" +
            ", streetAddress='" + getStreetAddress() + "'" +
            ", city='" + getCity() + "'" +
            ", state='" + getState() + "'" +
            ", zipCode='" + getZipCode() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", formW2='" + getFormW2() + "'" +
            ", form1099='" + getForm1099() + "'" +
            "}";
    }


}
