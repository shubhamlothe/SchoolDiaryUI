import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
  constructor(
    public userId?: string,
    public fName?: string,
    public lName?: string,
    public email_id?: string,
    public mobile_no?: string,
    public address?: string,
    public country?: string,
    public city?: string,
    public state?: string,
    public role_id?: number,
    public fName_f?: string,
    public lName_f?: string,
    public email_id_f?: string,
    public mobile_no_f?: string,
    public dob?: string,
    public gender?: string,
    public student_class?: number,
    public faculty_class?: number,
    public joining_date?: string,
    public password?: string,
    public isApproved?: any,
    public status: string = "red",
    public securityQuestionId_S?: string,
    public securityQuestionId_F?: string,
    public sQanswer_S?: string,
    public sQanswer_F?: string,
    public security_q_A?: string,
    public security_q_id?: string,
    public rePassword?: string
  ) { }
}

export class UserQuery {
  constructor(
    public id?: number,
    public name?: string,
    public contactPersonEmail?: string,
    public subject?: string,
    public userid?: string,
    public message?: string,
    public roleid?: number) { }
}



export class attendance {
  constructor(
    public compid?: string,
    public att_date?: string,
    public student_id?: string,
    public student_class?: number,
    public present?: number,
    public studentleave?: number,
    public attendance_colour?: string,
    public user_id_student?: string,
    public dOB?: string,
    public fname?: string,
    public lanme?: string,
    public gender?: string,
    public user_id_parent?: string,
    public status: string = 'red'
  ) { }
}

export class faculty {
  constructor(
    public user_id_faculty: string,
    public teaching_class: number,
    public joining_date: string,
    public dob: string,
    public gender: string
  ) { }
}

export class student {
  constructor(
    public user_id_student?: string,
    public student_class?: number,
    public gender?: string,
    public dob?: string,
    public user_id_parent?: string,
    public fName?: string,
    public lName?: string,

  ) { }
}

export class notice {
  constructor(
    public notice_id?: number,
    public msg?: string,
    public date_from?: string,
    public date_to?: string,
    public student_class?: number

  ) { }
}

export class result {
  constructor(
    public compid?: string,
    public student_class?: number,
    public exam_date?: string,
    public max_marks?: number,
    public obt_marks?: number,
    public student_id?: string,
    public subject?: string,
    public fName?: string,
    public lName?: string,
    public user_id_student?: string,
    public dob?: string,
    public user_id_parent?: string,
    public gender?: string

  ) { }
}


var requestBody: any = {
  headers: {
    'Content-type': 'application/json',
    'X-CSCAPI-KEY': 'OFI5cHlMUFExZm5mbW9vWFl0T0lyRnZNZkNIUWZkc1RUSmlzYVlFNQ==',
    'Access-Control-Allow-Origin': '*'
  }
};

export class Countries {

  constructor(
    public id: number,
    public name: string,
    public iso2: string

  ) { }

}
export class City {
  constructor(
    public id: number
  ) { }
}






@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  constructor(private httpClient: HttpClient) { }

  Register(user: User) {

    if (user.securityQuestionId_S == null) {
      alert("please fill all the details");
      return;
    }
    return this.httpClient.post<User>("http://localhost:8080/user_reg", user);
  }
  login(user: User) {
    if (user.email_id == null || user.password == null) {
      alert("Please fill all the fields");
      return;
    }
    return this.httpClient.post<User>("http://localhost:8080/login", user);
  }
  StudentList(cls: number) {
    return this.httpClient.get<result[]>("http://localhost:8080/student_List/" + cls);
  }

  StudentList1(cls: number) {
    return this.httpClient.get<attendance[]>("http://localhost:8080/student_List/" + cls);
  }
  forget(user: User) {
    return this.httpClient.post<number>("http://localhost:8080/forget", user);
  }

  getClass(id: string) {

    return this.httpClient.get<faculty>("http://localhost:8080/get_class/" + id);

  }


  getUser(id: string) {
    return this.httpClient.get<User>("http://localhost:8080/userDetails/" + id);

  }

  getClassNotice(Notice: notice) {

    return this.httpClient.post<notice[]>("http://localhost:8080/notice/class", Notice);
  }

  getAttendance(cls: string) {
    return this.httpClient.get<attendance[]>("http://localhost:8080/get_attendanceId/" + cls);

  }

  getStudentClas(id: string) {

    return this.httpClient.get<student>("http://localhost:8080/getStudentclass/" + id);
  }

  getResult(id: string) {
    return this.httpClient.get<result[]>("http://localhost:8080/getResult/" + id);
  }

  getGlobalNotice(Notice: notice) {
    return this.httpClient.post<notice[]>("http://localhost:8080/notice/class", Notice);
  }

  updateResult(Result: result[]) {
    return this.httpClient.post<result>("http://localhost:8080/updateResult", Result);
  }

  getFacultyClass(id: string) {
    return this.httpClient.get<faculty>("http://localhost:8080/get_class/" + id);

  }

  submitAttendance(att: attendance[]) {
    return this.httpClient.post<attendance>("http://localhost:8080/submit_Attendance", att);
  }

  sendQuery(cm: UserQuery) {
    return this.httpClient.post<UserQuery>("http://localhost:8080/insertQuery", cm);
  }

  getCountries() {
    return this.httpClient.get<Countries[]>("https://api.countrystatecity.in/v1/countries", requestBody);
  }
  getState(code: string) {
    return this.httpClient.get<Countries[]>("https://api.countrystatecity.in/v1/countries/" + code + "/states", requestBody);
  }

  getCity(codec: string, code: string) {
    return this.httpClient.get<Countries[]>("https://api.countrystatecity.in/v1/countries/" + codec + "/states/" + code + "/cities", requestBody);
  }

  GetChildByUid(uid: string) {
    return this.httpClient.get<student[]>("http://localhost:8080/getStudent/" + uid);
  }
  approval(users: User[]) {
    return this.httpClient.post("http://localhost:8080/approval/", users);
  }
  GetPending() {
    return this.httpClient.get<User[]>("http://localhost:8080/userList");
  }


  insertQuery(query: UserQuery) {
    return this.httpClient.post<UserQuery>("http://localhost:8080/insertQuery/", query);
  }

  updateUserProfile(user: User) {
    return this.httpClient.post<User>("http://localhost:8080/updateUser/", user);
  }

  addNotice(Notice: notice) {
    return this.httpClient.post<notice>("http://localhost:8080/AddNotice/", Notice);
  }

  getAllNoticeForAdmin(date: string) {

    return this.httpClient.get<notice[]>("http://localhost:8080/getClassNoticesForAdmin/" + date);
  }

  getAlreadyAppliedExams(cls: number) {

    return this.httpClient.get<result[]>("http://localhost:8080/getAlreadyAppliedExams/" + cls)

  }

  getAllNotic() {

    return this.httpClient.get<notice[]>("http://localhost:8080/getAllNotice");
  }

}
