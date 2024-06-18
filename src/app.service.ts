import { HttpService } from '@nestjs/axios';
import {Injectable} from '@nestjs/common';
import {forkJoin, map} from "rxjs";
import { AxiosResponse } from 'axios';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {
  }
  getLeads(query: string) {
      let users = this.httpService.get("https://dsiomov34.amocrm.ru/api/v4/users", {
          headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZjNjZjRkZDBjZjdmZGU0MGZkZWRiYjM3ODNiNTE1NjRiZWE3MTU5ZjliOTQ3N2NlNGUyYzkyYTY0OTJmMjJmMWY0NGQ2ZTEyOGZlYmM0In0.eyJhdWQiOiI1NmRmMGUzNy03MmE1LTQ4YjgtOTI0ZC0zNmRjZTYwMzkxYzIiLCJqdGkiOiI2OGYzY2Y0ZGQwY2Y3ZmRlNDBmZGVkYmIzNzgzYjUxNTY0YmVhNzE1OWY5Yjk0NzdjZTRlMmM5MmE2NDkyZjIyZjFmNDRkNmUxMjhmZWJjNCIsImlhdCI6MTcxODY1MTA5NywibmJmIjoxNzE4NjUxMDk3LCJleHAiOjE3MTk3MDU2MDAsInN1YiI6IjExMTY5MDAyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODA1MDUwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZGM3ZTNmM2UtOTA4OC00ODliLTg3ZjItYTlhY2QzNzUxOTBhIn0.K2mrne8_qyfKy7E2WfoVJl_3JZdYoPXTp3jsHbV85CQ7jgQaS3e8lMH6OkspeC2UTIqk8pGNFlvTBqEycs4eTOpI1_91svrl8Z7tLl2c9HeNnphfsCKfLL3K2N9YmVKBXtdp02g0p_v7QzujTpSRiAzgxuNp05w5s4l8-eUiFBZd0hyE8eb8r_HZnfA754FqPNTWg-8rxNjN4uQWi-KwVZNFl-q0KswL4F7pMjtEkT6Hu6gj7NzIUV9zIlwpBFqWKqSAQXJFCG0-WUTDfl4lnY5fHKiehx71A15lZWVY3IAvfcS_mEyPkKGyGOPaDuV8Brk1Pytqki-HWEzdWBbm8Q'},
      }).pipe(
          map((axiosResponse: AxiosResponse) => {
              return axiosResponse.data._embedded.users.map(user => ({
                  id: user.id, name: user.name,
              }));
          })
      );
      let pipelines = this.httpService.get("https://dsiomov34.amocrm.ru/api/v4/leads/pipelines", {
          headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZjNjZjRkZDBjZjdmZGU0MGZkZWRiYjM3ODNiNTE1NjRiZWE3MTU5ZjliOTQ3N2NlNGUyYzkyYTY0OTJmMjJmMWY0NGQ2ZTEyOGZlYmM0In0.eyJhdWQiOiI1NmRmMGUzNy03MmE1LTQ4YjgtOTI0ZC0zNmRjZTYwMzkxYzIiLCJqdGkiOiI2OGYzY2Y0ZGQwY2Y3ZmRlNDBmZGVkYmIzNzgzYjUxNTY0YmVhNzE1OWY5Yjk0NzdjZTRlMmM5MmE2NDkyZjIyZjFmNDRkNmUxMjhmZWJjNCIsImlhdCI6MTcxODY1MTA5NywibmJmIjoxNzE4NjUxMDk3LCJleHAiOjE3MTk3MDU2MDAsInN1YiI6IjExMTY5MDAyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODA1MDUwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZGM3ZTNmM2UtOTA4OC00ODliLTg3ZjItYTlhY2QzNzUxOTBhIn0.K2mrne8_qyfKy7E2WfoVJl_3JZdYoPXTp3jsHbV85CQ7jgQaS3e8lMH6OkspeC2UTIqk8pGNFlvTBqEycs4eTOpI1_91svrl8Z7tLl2c9HeNnphfsCKfLL3K2N9YmVKBXtdp02g0p_v7QzujTpSRiAzgxuNp05w5s4l8-eUiFBZd0hyE8eb8r_HZnfA754FqPNTWg-8rxNjN4uQWi-KwVZNFl-q0KswL4F7pMjtEkT6Hu6gj7NzIUV9zIlwpBFqWKqSAQXJFCG0-WUTDfl4lnY5fHKiehx71A15lZWVY3IAvfcS_mEyPkKGyGOPaDuV8Brk1Pytqki-HWEzdWBbm8Q'},
      }).pipe(
          map((axiosResponse: AxiosResponse) => {
              return axiosResponse.data._embedded.pipelines.map(pipeline => ({
                  id: pipeline.id, name: pipeline.name, statuses: pipeline._embedded.statuses.map(status => ({
                      id: status.id, name: status.name, color: status.color
                  }))}));
          })
      );
    let leads = this.httpService.get("https://dsiomov34.amocrm.ru/api/v4/leads", {
      params: {
        query: query,
      },
      headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZjNjZjRkZDBjZjdmZGU0MGZkZWRiYjM3ODNiNTE1NjRiZWE3MTU5ZjliOTQ3N2NlNGUyYzkyYTY0OTJmMjJmMWY0NGQ2ZTEyOGZlYmM0In0.eyJhdWQiOiI1NmRmMGUzNy03MmE1LTQ4YjgtOTI0ZC0zNmRjZTYwMzkxYzIiLCJqdGkiOiI2OGYzY2Y0ZGQwY2Y3ZmRlNDBmZGVkYmIzNzgzYjUxNTY0YmVhNzE1OWY5Yjk0NzdjZTRlMmM5MmE2NDkyZjIyZjFmNDRkNmUxMjhmZWJjNCIsImlhdCI6MTcxODY1MTA5NywibmJmIjoxNzE4NjUxMDk3LCJleHAiOjE3MTk3MDU2MDAsInN1YiI6IjExMTY5MDAyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODA1MDUwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZGM3ZTNmM2UtOTA4OC00ODliLTg3ZjItYTlhY2QzNzUxOTBhIn0.K2mrne8_qyfKy7E2WfoVJl_3JZdYoPXTp3jsHbV85CQ7jgQaS3e8lMH6OkspeC2UTIqk8pGNFlvTBqEycs4eTOpI1_91svrl8Z7tLl2c9HeNnphfsCKfLL3K2N9YmVKBXtdp02g0p_v7QzujTpSRiAzgxuNp05w5s4l8-eUiFBZd0hyE8eb8r_HZnfA754FqPNTWg-8rxNjN4uQWi-KwVZNFl-q0KswL4F7pMjtEkT6Hu6gj7NzIUV9zIlwpBFqWKqSAQXJFCG0-WUTDfl4lnY5fHKiehx71A15lZWVY3IAvfcS_mEyPkKGyGOPaDuV8Brk1Pytqki-HWEzdWBbm8Q'},
    }).pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data._embedded.leads.map(lead => ({
              id: lead.id, name: lead.name, price: lead.price, date: new Date(lead.created_at), pipelineId: lead.pipeline_id, statusId: lead.status_id, responsibleId: lead.responsible_user_id
          }));
        })
    )
    return forkJoin({
        leads: leads,
        pipelines: pipelines,
        users: users
    })
  }
}
