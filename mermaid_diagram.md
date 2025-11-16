%% flowchart TD

%% A[GP Referral / Patient referred] --> B[Consultant triage <br> Routine / Soon / Urgent]
%% B --> C[Patient sees Consultant<br>Letter/referral back to GP if needed]

%% C --> D[Imaging ordered or Patient discharged]

%% D -->|Imaging Results| E{Results?}
%% E -->|Biopsy needed| F[Biopsy]
%% E -->|No biopsy<br>or benign| X[Discharged]

%% F --> G[Pathology Results]

%% G --> H[Multi-disciplinary Team MDT Meeting<br>Radiologist / Pathologist / Consultant / Breast Care Nurse]

%% H --> I[Write to patient with outcome<br>or see in clinic]

%% I --> J[Surgery]

%% J --> K[Discharge letter<br>+ Referral to Oncology]

%% K --> L[Radiotherapy / Chemotherapy / Endocrine therapy]

%% L --> M[Follow-up in Breast Clinic<br>for 5 years]

flowchart TD
    1([Patient visits the GP with a concern]) --> 
    2{Is the complaint valid?}
        2 -- Yes --> 3{{A letter is sent by email to a Consultant to determine severity}}
        2 -- No --> 4((Discharged))
    3 -- Routine/Soon --> 5{{Letter of referal to consultant sent back to GP}}  
    5 --> 6
    3 -- Urgent --> 6(Imaging)
    5 --> 4
    6 --> 7(Biopsy)
    7 --> 8(Pathology)
    8 --> 9("Multi-disiplinary team meeting <br> Radiologist | Pathologist | Consultant | Breast Care Nurse")
    9 --> 10{{Email Patient}}
        10 -- Discharge --> 4
        10 --> 11(Surgery appointment)
    11 --> 12("Oncology <br> Radiotherapy | Chemo | Endocrine")
    12 --> 13(Follow-up in Breast Clinic for 5 years)
    13 --> 4
