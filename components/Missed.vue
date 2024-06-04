<template>
	<div>
		<v-table>
			<thead>
        <tr>
          <th class="text-left">
            College
          </th>
          <th class="text-left">
            Counselling
          </th>
        </tr>
      </thead>
      <tbody>
<tr v-for="(college,index) in everything" :key="index">
		<td> {{college.name}} </td>
		<td> <a :href="college.link" rel> {{college.counselling}} </a></td>
	</tr>
      </tbody>
		</v-table>
	</div>

</template>

<script>
export default{
	name: 'missed',

	data: ()=>({
			everything:[{
				name:'NSUT Delhi',
				counselling: 'JAC Delhi',
				link: 'https://jacdelhi.admissions.nic.in/'
			},
			{
				name: 'BITS Pilani',
				counselling: 'BITSAT',
				link:'https://www.bitsadmission.com/',
			},
			{
				name: 'IIIT Delhi',
				counselling: 'JAC Delhi',
				link: 'https://jacdelhi.admissions.nic.in/'
			},

			{
				name: 'Jadavpur University',
				counselling: 'WEBJEE',
				link: 'https://wbjeeb.nic.in/'
			},
			{
				name: 'Heritage Institute of Technology, Kolkata',
				counselling: 'WEBJEE',
				link: 'https://wbjeeb.nic.in/',
			},
			{
				name: 'SRM',
				counselling: 'SRM',
				link: 'https://admissions.srmuniversity.ac.in/'	
			},
			{
				name: 'ICT Mumbai ',
				counselling: 'MHCET',
				link: 'https://cetcell.mahacet.org/'
			},
			{
				name: 'DTU',
				counselling: 'JAC Delhi',
				link:'https://jacdelhi.admissions.nic.in/'

			},
			{
				name:'MAIT',
				counselling: 'IPU',
				link: 'http://www.ipu.ac.in/admission2024main.php'

			},
			{
				name:'GTBIT',
				counselling: 'IPU',
				link: 'http://www.ipu.ac.in/admission2024main.php'

			},
			{
				name:'MSIT',
				counselling: 'IPU',
				link: 'http://www.ipu.ac.in/admission2024main.php'
			},
			{
				name:'VIT',
				counselling:'VITEEE',
				link:'https://viteee.vit.ac.in/',
			},
			{
				name:'Manipal Institue of Technology',
				counselling:'Manipal',
				link:'https://www.manipal.edu/mit.html',

			}, 
			]
	}),
}
</script>
